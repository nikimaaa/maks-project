import React from "react"
import UserList from '../../components/UserList/UserList'
import CreateUser from '../../components/CreateUser/CreateUser'
import {useState} from 'react'
import {useEffect} from 'react'

const Users = ()=>{
    const [users, setUsers] = useState([])
    useEffect(async ()=>{
      const response = await fetch('/api/user', {method: 'GET'});
      setUsers(await response.json());
    }, [])
    return(
        <React.Fragment>
        <CreateUser setUsers={setUsers} users={users}/>
        <UserList users={users} setUsers={setUsers}/>
        </React.Fragment>
    )
}
export default Users