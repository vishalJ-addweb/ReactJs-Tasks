import React, { useEffect, useReducer } from 'react'
import axios from 'axios';

const initialState = {
    name: "",
    email: "",
    remainingUserData: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "loadName":
            return { ...state, name: action.value }
        case "loadEmail":
            return { ...state, email: action.value }
        case "remainingUserData":
            return { ...state, remainingUserData: action.value }
        default :
            return state            
    }
}

const EditUserFuncReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        loadUserData();
        // eslint-disable-next-line
    }, [])

    const loadUserData = async () => {
        const resp = await axios.get(`http://localhost:3005/users/${props.editUser.id}`);
        dispatch({ type: "loadName", value: resp.data.name })
        dispatch({ type: "loadEmail", value: resp.data.email })
        dispatch({ type: "remainingUserData", value: resp.data })
    }

    const editHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3005/users/${props.editUser.id}`, { ...state.remainingUserData, name: state.name, email: state.email }).then(() => {
            props.onEditSuccess();
        })
    }

    return (
        <form onSubmit={editHandler}>
            <div>
                <div>
                    <label>Name</label>
                    <input type="text" value={state.name} onChange={(e) => dispatch({ type: "loadName", value: e.target.value })} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={state.email} onChange={(e) => dispatch({ type: "loadEmail", value: e.target.value })} />
                </div>
            </div>
            <div>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Update</button>
            </div>
        </form>
    )
}

export default EditUserFuncReducer
