import React, { useState } from 'react'

interface AddUserProps {
  onSaveUserData(a: object): void;
  onCancel(): void;
}

interface AllStatesOfAddUser {
  name: string;
  userName: string;
  email: string;
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  lat: string;
  lng: string;
  phone: string;
  website: string;
  compName: string;
  catchPhrase: string;
  bs: string;
}

const defaultAddUserStateValues = {
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
  bs: "",
};

const AddDataFormFunc = (props: AddUserProps) => {
  const [add, setAdd] = useState<AllStatesOfAddUser>(defaultAddUserStateValues);

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (
      add.name &&
      add.userName &&
      add.email &&
      add.street &&
      add.suite &&
      add.city &&
      add.zipCode &&
      add.lat &&
      add.lng &&
      add.phone &&
      add.website &&
      add.compName &&
      add.catchPhrase &&
      add.bs
    ) {
      const userData = {
        name: add.name,
        username: add.userName,
        email: add.email,
        address: {
          street: add.street,
          suite: add.suite,
          city: add.city,
          zipcode: add.zipCode,
          geo: {
            lat: add.lat,
            lng: add.lng,
          },
        },
        phone: add.phone,
        website: add.website,
        company: {
          name: add.compName,
          catchPhrase: add.catchPhrase,
          bs: add.bs,
        },
      };
      props.onSaveUserData(userData);
    } else {
      alert("Please fill the data in all fields");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={add.name}
              onChange={(e) => setAdd({ ...add, name: e.target.value })}
            />
          </div>
          <div>
            <label>UserName</label>
            <input
              type="text"
              value={add.userName}
              onChange={(e) => setAdd({ ...add, userName: e.target.value })}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              value={add.email}
              onChange={(e) => setAdd({ ...add, email: e.target.value })}
            />
          </div>
        </div>
        <br />
        <br />
        <div>Address :</div>
        <div style={{ display: "flex" }}>
          <div>
            <label>Street</label>
            <input
              type="text"
              value={add.street}
              onChange={(e) => setAdd({ ...add, street: e.target.value })}
            />
          </div>
          <div>
            <label>Suite</label>
            <input
              type="text"
              value={add.suite}
              onChange={(e) => setAdd({ ...add, suite: e.target.value })}
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              value={add.city}
              onChange={(e) => setAdd({ ...add, city: e.target.value })}
            />
          </div>
          <div>
            <label>ZipCode</label>
            <input
              type="text"
              value={add.zipCode}
              onChange={(e) => setAdd({ ...add, zipCode: e.target.value })}
            />
          </div>
        </div>
        <div>GeoLocation In Address :</div>
        <div style={{ display: "flex" }}>
          <div>
            <label>Lat</label>
            <input
              type="text"
              value={add.lat}
              onChange={(e) => setAdd({ ...add, lat: e.target.value })}
            />
          </div>
          <div>
            <label>Lng</label>
            <input
              type="text"
              value={add.lng}
              onChange={(e) => setAdd({ ...add, lng: e.target.value })}
            />
          </div>
        </div>
        <br />
        <br />
        <div style={{ display: "flex" }}>
          <div>
            <label>Phone</label>
            <input
              type="text"
              value={add.phone}
              onChange={(e) => setAdd({ ...add, phone: e.target.value })}
            />
          </div>
          <div>
            <label>Website</label>
            <input
              type="text"
              value={add.website}
              onChange={(e) => setAdd({ ...add, website: e.target.value })}
            />
          </div>
        </div>
        <br />
        <br />
        <div>Company :</div>
        <div style={{ display: "flex" }}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={add.compName}
              onChange={(e) => setAdd({ ...add, compName: e.target.value })}
            />
          </div>
          <div>
            <label>CatchPhrase</label>
            <input
              type="text"
              value={add.catchPhrase}
              onChange={(e) => setAdd({ ...add, catchPhrase: e.target.value })}
            />
          </div>
          <div>
            <label>BS</label>
            <input
              type="text"
              value={add.bs}
              onChange={(e) => setAdd({ ...add, bs: e.target.value })}
            />
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
  );
};

export default AddDataFormFunc