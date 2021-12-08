import React, { useState } from 'react'

const AddDataFormFunc = (props) => {

    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [street, setStreet] = useState("")
    const [suite, setSuite] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")
    const [compName, setCompName] = useState("")
    const [catchPhrase, setCatchPhrase] = useState("")
    const [bs, setBS] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        if (name && userName && email && street && suite && city && zipCode && lat && lng && phone && website && compName && catchPhrase && bs) {
            const userData = {
                name: name,
                username: userName,
                email: email,
                address: {
                    street: street,
                    suite: suite,
                    city: city,
                    zipcode: zipCode,
                    geo: {
                        lat: lat,
                        lng: lng
                    }
                },
                phone: phone,
                website: website,
                company: {
                    name: compName,
                    catchPhrase: catchPhrase,
                    bs: bs
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
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <label>UserName</label>
                        <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                </div>
                <br />
                <br />
                <div>Address :</div>
                <div style={{ display: "flex" }}>
                    <div>
                        <label>Street</label>
                        <input type="text" value={street} onChange={(e) => {setStreet(e.target.value)}} />
                    </div>
                    <div>
                        <label>Suite</label>
                        <input type="text" value={suite} onChange={(e) => {setSuite(e.target.value)}} />
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" value={city} onChange={(e) => {setCity(e.target.value)}} />
                    </div>
                    <div>
                        <label>ZipCode</label>
                        <input type="text" value={zipCode} onChange={(e) => {setZipCode(e.target.value)}} />
                    </div>
                </div>
                <div>GeoLocation In Address :</div>
                <div style={{ display: "flex" }}>
                    <div>
                        <label>Lat</label>
                        <input type="text" value={lat} onChange={(e) => {setLat(e.target.value)}} />
                    </div>
                    <div>
                        <label>Lng</label>
                        <input type="text" value={lng} onChange={(e) => {setLng(e.target.value)}} />
                    </div>
                </div>
                <br />
                <br />
                <div style={{ display: "flex" }}>
                    <div>
                        <label>Phone</label>
                        <input type="text" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
                    </div>
                    <div>
                        <label>Website</label>
                        <input type="text" value={website} onChange={(e) => {setWebsite(e.target.value)}} />
                    </div>
                </div>
                <br />
                <br />
                <div>Company :</div>
                <div style={{ display: "flex" }}>
                    <div>
                        <label>Name</label>
                        <input type="text" value={compName} onChange={(e) => {setCompName(e.target.value)}} />
                    </div>
                    <div>
                        <label>CatchPhrase</label>
                        <input type="text" value={catchPhrase} onChange={(e) => {setCatchPhrase(e.target.value)}} />
                    </div>
                    <div>
                        <label>BS</label>
                        <input type="text" value={bs} onChange={(e) => {setBS(e.target.value)}} />
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

export default AddDataFormFunc