import React, { useReducer } from 'react';
const initialState = {
    name: "",
    userName: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipCode: "",
    lat: "",
    lng: "",
    phone: "",
    website: "",
    compName: "",
    catchPhrase: "",
    bs: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "name":
            return { ...state, name: action.value }
        case "userName":
            return { ...state, userName: action.value }
        case "email":
            return { ...state, email: action.value }
        case "street":
            return { ...state, street: action.value }
        case "suite":
            return { ...state, suite: action.value }
        case "city":
            return { ...state, city: action.value }
        case "zipCode":
            return { ...state, zipCode: action.value }
        case "lat":
            return { ...state, lat: action.value }
        case "lng":
            return { ...state, lng: action.value }
        case "phone":
            return { ...state, phone: action.value }
        case "website":
            return { ...state, website: action.value }
        case "compName":
            return { ...state, compName: action.value }
        case "catchPhrase":
            return { ...state, catchPhrase: action.value }
        case "bs":
            return { ...state, bs: action.value }
        default:
            return state
    }
}

const AddDataFormFuncReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const submitHandler = (event) => {
        event.preventDefault();
        if (state.name && state.userName && state.email && state.street && state.suite && state.city && state.zipCode && state.lat && state.lng && state.phone && state.website && state.compName && state.catchPhrase && state.bs) {
            const userData = {
                name: state.name,
                username: state.userName,
                email: state.email,
                address: {
                    street: state.street,
                    suite: state.suite,
                    city: state.city,
                    zipcode: state.zipCode,
                    geo: {
                        lat: state.lat,
                        lng: state.lng
                    }
                },
                phone: state.phone,
                website: state.website,
                company: {
                    name: state.compName,
                    catchPhrase: state.catchPhrase,
                    bs: state.bs
                }
            }
            props.onSaveUserData(userData);
        } else {
            alert("Please fill the data in all fields");
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div style={{ display: "flex" }}>
                    <div>
                        <label>Name</label>
                        <input type="text" value={state.name} onChange={(e) => dispatch({ type: "name", value: e.target.value })} />
                    </div>
                    <div>
                        <label>UserName</label>
                        <input type="text" value={state.userName} onChange={(e) => dispatch({ type: "userName", value: e.target.value })} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={state.email} onChange={(e) => dispatch({ type: "email", value: e.target.value })} />
                    </div>
                </div>
                <br />
                <br />
                <div>Address :</div>
                <div style={{ display: "flex" }}>
                    <div>
                        <label>Street</label>
                        <input type="text" value={state.street} onChange={(e) => dispatch({ type: "street", value: e.target.value })} />
                    </div>
                    <div>
                        <label>Suite</label>
                        <input type="text" value={state.suite} onChange={(e) => dispatch({ type: "suite", value: e.target.value })} />
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" value={state.city} onChange={(e) => dispatch({ type: "city", value: e.target.value })} />
                    </div>
                    <div>
                        <label>ZipCode</label>
                        <input type="text" value={state.zipCode} onChange={(e) => dispatch({ type: "zipCode", value: e.target.value })} />
                    </div>
                </div>
                <div>GeoLocation In Address :</div>
                <div style={{ display: "flex" }}>
                    <div>
                        <label>Lat</label>
                        <input type="text" value={state.lat} onChange={(e) => dispatch({ type: "lat", value: e.target.value })} />
                    </div>
                    <div>
                        <label>Lng</label>
                        <input type="text" value={state.lng} onChange={(e) => dispatch({ type: "lng", value: e.target.value })} />
                    </div>
                </div>
                <br />
                <br />
                <div style={{ display: "flex" }}>
                    <div>
                        <label>Phone</label>
                        <input type="text" value={state.phone} onChange={(e) => dispatch({ type: "phone", value: e.target.value })} />
                    </div>
                    <div>
                        <label>Website</label>
                        <input type="text" value={state.website} onChange={(e) => dispatch({ type: "website", value: e.target.value })} />
                    </div>
                </div>
                <br />
                <br />
                <div>Company :</div>
                <div style={{ display: "flex" }}>
                    <div>
                        <label>Name</label>
                        <input type="text" value={state.compName} onChange={(e) => dispatch({ type: "compName", value: e.target.value })} />
                    </div>
                    <div>
                        <label>CatchPhrase</label>
                        <input type="text" value={state.catchPhrase} onChange={(e) => dispatch({ type: "catchPhrase", value: e.target.value })} />
                    </div>
                    <div>
                        <label>BS</label>
                        <input type="text" value={state.bs} onChange={(e) => dispatch({ type: "bs", value: e.target.value })} />
                    </div>
                </div>
                <br />
                <br />
            </div>
            <div>
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add User</button>
            </div>
        </form>
    )
}

export default AddDataFormFuncReducer
