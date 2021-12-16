import React, { useState, useEffect } from 'react'
import axios from 'axios';

interface EditUserProps {
  onCancel(): void;
  onEditSuccess(): void;
  editUser: User;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface AllStatesOfEditUser {
  name: string;
  email: string;
  remainingUserData: object;
}

const defaultEditUserStateValues = {
  name: "",
  email: "",
  remainingUserData: [],
};

const EditUserFunc = (props: EditUserProps) => {
  const [edit, setEdit] = useState<AllStatesOfEditUser>(
    defaultEditUserStateValues
  );

  useEffect(() => {
    loadUserData();
    // eslint-disable-next-line
  }, []);

  const loadUserData = async () => {
    const resp = await axios.get(
      `http://localhost:3005/users/${props.editUser.id}`
    );
    setEdit({
      ...edit,
      name: resp.data.name,
      email: resp.data.email,
      remainingUserData: resp.data,
    });
  };

  const editHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3005/users/${props.editUser.id}`, {
        ...edit.remainingUserData,
        name: edit.name,
        email: edit.email,
      })
      .then(() => {
        props.onEditSuccess();
      });
  };

  return (
    <form onSubmit={editHandler}>
      <div>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={edit.name}
            onChange={(e) => setEdit({ ...edit, name: e.target.value })}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={edit.email}
            onChange={(e) => setEdit({ ...edit, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default EditUserFunc
