import React, { useState, useEffect } from 'react'
import axios from 'axios';
const EditUserFunc = (props) => {

    // const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [remainingUserData, setRemainingUserData] = useState([]);

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    useEffect(() => {
        loadUserData();
        // eslint-disable-next-line
    }, [])

    const loadUserData = async () => {
        const resp = await axios.get(`http://localhost:3005/users/${props.editUser.id}`);
        setName(resp.data.name)
        setEmail(resp.data.email)
        setRemainingUserData(resp.data)
    }

    const editHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3005/users/${props.editUser.id}`, { ...remainingUserData, name: name, email: email }).then(() => {
            props.onEditSuccess(event);
        })
    }

    return (
        <form onSubmit={editHandler}>
            <div>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={nameChangeHandler} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} onChange={emailChangeHandler} />
                </div>
            </div>
            <div>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Update</button>
            </div>
        </form>
    )
}

export default EditUserFunc
