import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import AddDataForm from './AddDataForm';
// import EditUser from "./EditUser";
import AddDataFormFunc from "./AddDataFormFunc";
import EditUserFunc from './EditUserFunc';
import { Table, Input, Button } from "antd";
import "antd/dist/antd.css";
const { Search } = Input;

const UsersFunc = () => {
  const [usersItems, setUsersItems] = useState([]);
  const [isAddData, setIsAddData] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editUserData, setEditUserData] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const resp = await axios.get("http://localhost:3005/users");
    setUsersItems(resp.data);
  };

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:3005/users/${id}`).then(() => {
      getAllUsers();
    });
  };

  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
    };
    axios.post("http://localhost:3005/users", userData).then(() => {
      getAllUsers();
    });
    setIsAddData(false);
  };

  const startAddDataHandler = () => {
    setIsAddData(true);
  };

  const stopAddDataHandler = () => {
    setIsAddData(false);
  };

  const stopEditData = () => {
    setIsEditing(false);
  };

  const updateDataHandler = () => {
    setIsEditing(false);
    getAllUsers();
  };

  const editHandler = (response) => {
    setIsEditing(true);
    setEditUserData(response);
  };

  const onSearch = (value) => {
    console.log(value);
  };

  const search = (rows) => {
    return rows.filter(
      (row) =>
        row.name.toLowerCase().includes(query.trim().toLowerCase()) ||
        row.username.toLowerCase().includes(query.trim().toLowerCase()) ||
        row.email.toLowerCase().includes(query.trim().toLowerCase())
    );
  };

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      key: "3",
      title: "UserName",
      dataIndex: "username",
      sorter: (a, b) => a.username.length - b.username.length,
    },
    {
      key: "4",
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      key: "5",
      title: "Street",
      dataIndex: ["address", "street"],
    },
    {
      key: "6",
      title: "Suite",
      dataIndex: ["address", "suite"],
    },
    {
      key: "7",
      title: "City",
      dataIndex: ["address", "city"],
    },
    {
      key: "8",
      title: "ZipCode",
      dataIndex: ["address", "zipcode"],
    },
    {
      key: "9",
      title: "Latitude",
      dataIndex: ["address", "geo", "lat"],
    },
    {
      key: "10",
      title: "Longitude",
      dataIndex: ["address", "geo", "lng"],
    },
    {
      key: "11",
      title: "Phone_No",
      dataIndex: "phone",
    },
    {
      key: "12",
      title: "Website",
      dataIndex: "website",
    },
    {
      key: "13",
      title: "Company_Name",
      dataIndex: ["company", "name"],
    },
    {
      key: "14",
      title: "Catch_Phrase",
      dataIndex: ["company", "catchPhrase"],
    },
    {
      key: "15",
      title: "BS",
      dataIndex: ["company", "bs"],
    },
    {
      key: "16",
      render: (item) => (
        <>
          <Button type="primary" onClick={() => editHandler(item)}>
            Edit
          </Button>
        </>
      ),
    },
    {
      key: "17",
      render: (item) => (
        <>
          <Button
            type="danger"
            className="danger"
            onClick={() => deleteHandler(item.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <div>
        {!isAddData && (
          <Button onClick={startAddDataHandler}>Add New User</Button>
        )}
        {isAddData && (
          <AddDataFormFunc
            onSaveUserData={saveUserDataHandler}
            onCancel={stopAddDataHandler}
          />
        )}
      </div>
      <br />
      <div>
        {isEditing ? (
          <EditUserFunc
            editUser={editUserData}
            onCancel={stopEditData}
            onEditSuccess={updateDataHandler}
          />
        ) : null}
      </div>
      <div className="container">
        <Search
          // onChange={(e) => this.setState({ setQuery: e.target.value })}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="input search text"
          onSearch={onSearch}
        />
      </div>
      <br />
      <header className="App-header">
        <Table
          dataSource={search(usersItems)}
          columns={columns}
          pagination={{ pageSize: 6 }}
        />
      </header>
    </>
  );
};

export default UsersFunc
