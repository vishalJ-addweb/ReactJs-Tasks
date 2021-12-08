import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import AddDataFormFuncReducer from './AddDataFormFuncReducer';
import EditUserFuncReducer from './EditUserFuncReducer';
import { Table, Input, Button } from 'antd';
import 'antd/dist/antd.css';
const { Search } = Input;

const initialState = {
    usersItems: [],
    isAddData: false,
    isEditing: false,
    editUserData: {},
    query: ""
}

const reducerFunc = (prevState, action) => {
    switch (action.type) {
        case "User_Items":
            return { ...prevState, usersItems: action.value }
        case "ShowAddUserForm":
            return { ...prevState, isAddData: !prevState.isAddData }
        case "ShowEditForm":
            return { ...prevState, isEditing: !prevState.isEditing }
        case "EditUserData":
            return { ...prevState, editUserData: action.value }
        case "SearchedData":
            return {...prevState,query:action.value}
        default:
            return prevState
    }
}

const UsersFunc = () => {

    const [state, dispatchFunc] = useReducer(reducerFunc, initialState)

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        const resp = await axios.get('http://localhost:3005/users');
        dispatchFunc({ type: "User_Items", value: resp.data })
    }

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:3005/users/${id}`).then(() => {
            getAllUsers();
        });
    }

    const saveUserDataHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData
        }
        axios.post('http://localhost:3005/users', userData).then(() => {
            getAllUsers();
        });
        dispatchFunc({ type: "ShowAddUserForm" })
    }


    const updateDataHandler = () => {
        dispatchFunc({ type: "ShowEditForm" })
        getAllUsers();
    }

    const editHandler = (response) => {
        dispatchFunc({ type: "ShowEditForm" })
        dispatchFunc({ type: "EditUserData", value:response })
    }

    const onSearch = (value) => {
        console.log(value)
    }

    const search = (rows) => {
        return rows.filter((row) => row.name.toLowerCase().includes(state.query.trim().toLowerCase())
            || row.username.toLowerCase().includes(state.query.trim().toLowerCase()) || row.email.toLowerCase().includes(state.query.trim().toLowerCase())
        );
    }

    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id',
        },
        {
            key: '2',
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            key: '3',
            title: 'UserName',
            dataIndex: 'username',
            sorter: (a, b) => a.username.length - b.username.length,
        },
        {
            key: '4',
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => a.email.length - b.email.length,
        },
        {
            key: '5',
            title: 'Street',
            dataIndex: ['address', 'street'],
        },
        {
            key: '6',
            title: 'Suite',
            dataIndex: ['address', 'suite'],
        },
        {
            key: '7',
            title: 'City',
            dataIndex: ['address', 'city'],
        },
        {
            key: '8',
            title: 'ZipCode',
            dataIndex: ['address', 'zipcode'],
        },
        {
            key: '9',
            title: 'Latitude',
            dataIndex: ['address', 'geo', 'lat'],
        },
        {
            key: '10',
            title: 'Longitude',
            dataIndex: ['address', 'geo', 'lng'],
        },
        {
            key: '11',
            title: 'Phone_No',
            dataIndex: 'phone',

        },
        {
            key: '12',
            title: 'Website',
            dataIndex: 'website',

        },
        {
            key: '13',
            title: 'Company_Name',
            dataIndex: ['company', 'name'],

        },
        {
            key: '14',
            title: 'Catch_Phrase',
            dataIndex: ['company', 'catchPhrase'],
        },
        {
            key: '15',
            title: 'BS',
            dataIndex: ['company', 'bs'],
        },
        {
            key: '16',
            render: (item) => (
                <>
                    <Button type='primary' onClick={() => editHandler(item)} >Edit</Button>
                </>)
        },
        {
            key: '17',
            render: (item) => (
                <>
                    <Button type='danger' className='danger' onClick={() => deleteHandler(item.id)} >Delete</Button>
                </>)
        }

    ];

    return (
        <>
            <div>
                {!state.isAddData && <Button onClick={() => dispatchFunc({ type: "ShowAddUserForm" })}>Add New User</Button>}
                {state.isAddData && <AddDataFormFuncReducer onSaveUserData={saveUserDataHandler} onCancel={() => dispatchFunc({ type: "ShowAddUserForm" })} />}
            </div>
            <br />
            <div>
                {state.isEditing ? <EditUserFuncReducer editUser={state.editUserData} onCancel={() => dispatchFunc({ type: "ShowEditForm" })} onEditSuccess={updateDataHandler} /> : null}
            </div>
            <div className="container">
                <Search
                    onChange={(e) => dispatchFunc({type:"SearchedData",value:e.target.value})}
                    value={state.query}
                    placeholder="input search text"
                    onSearch={onSearch}
                />
            </div>
            <br />
            <header className="App-header">
                <Table
                    dataSource={search(state.usersItems)}
                    columns={columns}
                    pagination={{ pageSize: 6 }}
                />
            </header>
        </>
    )
}

export default UsersFunc
