import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import AddUser from './AddUser';
import EditUser from './EditUser';
const { Search } = Input;

interface AllStatesOfUser {
    query: string;
    isEditing: boolean;
    isAddData: boolean
    editUserData: object
    usersItems: object[]
}

const defaultUserStateValues = {
    query: "",
    isEditing: false,
    isAddData: false,
    editUserData: {},
    usersItems: []
}

const ShowUser = () => {

    const [user, setUser] = useState<AllStatesOfUser>(defaultUserStateValues);

    useEffect(() => {
        getAllUsers();
        // eslint-disable-next-line
    }, [])

    const getAllUsers = async () => {
        const resp = await axios.get('http://localhost:3005/users');
        setUser({
            ...user,
            usersItems: resp.data,
            isEditing: false,
            isAddData: false
        })
    }

    const search = (rows: any) => {
        return rows.filter((row: any) => row.name.toLowerCase().includes(user.query.trim().toLowerCase())
            || row.username.toLowerCase().includes(user.query.trim().toLowerCase()) || row.email.toLowerCase().includes(user.query.trim().toLowerCase())
        );
    }

    const searchChangeHandler = (e: any) => {
        setUser({
            ...user,
            query: e.target.value
        })
    }

    const editHandler = (response: any) => {
        setUser({
            ...user,
            isEditing: true,
            editUserData: response
        })
    }

    const deleteHandler = (id: number) => {
        axios.delete(`http://localhost:3005/users/${id}`).then(() => {
            getAllUsers();
        });
    }

    const saveUserDataHandler = (enteredUserData: object) => {
        const userData = {
            ...enteredUserData
        }
        axios.post('http://localhost:3005/users', userData).then(() => {
            getAllUsers();
        });
        setUser({
            ...user,
            isAddData: false
        })
    }

    const updateDataHandler = () => {
        setUser({
            ...user,
            isEditing: false
        })
        getAllUsers();
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
            sorter: (a: any, b: any) => a.name.length - b.name.length,
        },
        {
            key: '3',
            title: 'UserName',
            dataIndex: 'username',
            sorter: (a: any, b: any) => a.username.length - b.username.length,
        },
        {
            key: '4',
            title: 'Email',
            dataIndex: 'email',
            sorter: (a: any, b: any) => a.email.length - b.email.length,
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
            render: (item: any) => (
                <>
                    <Button type='primary' onClick={() => editHandler(item)} >Edit</Button>
                </>)
        },
        {
            key: '17',
            render: (item: any) => (
                <>
                    <Button type='primary' danger className='danger' onClick={() => deleteHandler(item.id)} >Delete</Button>
                </>)
        }

    ];

    return (
        <>
            <br />
            <div>
                {!user.isAddData && <Button type='primary' onClick={() => setUser({ ...user, isAddData: true })}>Add New User</Button>}
                {user.isAddData && <AddUser onSaveUserData={saveUserDataHandler} onCancel={() => setUser({ ...user, isAddData: false })} />}
            </div>
            <br />
            <div>
                {user.isEditing ? <EditUser onEditSuccess={updateDataHandler}
                    editUser={user.editUserData}
                    onCancel={() => setUser({ ...user, isEditing: false })}
                /> : null}
            </div>
            <br />
            <div className="container">
                <Search
                    // onChange={(e: React.FormEvent<HTMLInputElement>):void=> {setUser({query:e.currentTarget.value})}}
                    onChange={searchChangeHandler}
                    value={user.query}
                    placeholder="input search text"
                />
            </div>
            <br />
            <header className="App-header">
                <Table
                    dataSource={search(user.usersItems)}
                    columns={columns}
                    pagination={{ pageSize: 6 }}
                />
            </header>
        </>
    )
}

export default ShowUser
