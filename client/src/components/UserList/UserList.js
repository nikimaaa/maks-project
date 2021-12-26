import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {NavLink} from 'react-router-dom'
import "./style.css" 
const UserList = ({users, setUsers}) => {

    const onDelete = useCallback((id)=>{
        axios.delete(`/api/user/${id}`);
        setUsers(users.filter((user)=>user._id!=id))
    })

    const [query, setQuery] = useState("");

    const filteredUsers = useMemo(()=>{
        return users.filter((user)=> user.name.toLowerCase().includes(query.trim().toLowerCase()))
    }, [users, query]);

    const [queryAge, setQueryAge] = useState("");

    const filteredUsersAge = useMemo(()=>{
        if(!queryAge){ return filteredUsers}
        return filteredUsers.filter((user)=> user.age === +queryAge.trim())
    }, [filteredUsers, queryAge]);

    return(
        <React.Fragment>
            <div className="filters">
                <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Name"></input>
                <input value={queryAge} onChange={(e)=>setQueryAge(e.target.value)} placeholder="Age"></input>
            </div>
    <div className="list">{
        filteredUsersAge.map((user) => 
        <div className="user-item">
            <NavLink to={`/user/${user._id}`}><img src={user.avatar}/></NavLink>
            <div className="user_charact">Name:{user.name}</div>
            <div className="user_charact">Age:{user.age}</div>
            <div className="user_charact">Is White:{user.iswhite}</div>
            <div className="del"onClick={() => onDelete(user._id)}>X</div>
        </div>
        )
    }
    </div>
    </React.Fragment>
    )
}
export default UserList;