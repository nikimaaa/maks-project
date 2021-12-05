import axios from "axios";
import { useCallback } from "react";
import "./style.css" 
const UserList = ({users, setUsers}) => {
    const onDelete = useCallback((id)=>{
        axios.delete(`/api/user/${id}`);
        setUsers(users.filter((user)=>user._id!=id))
    })
    return(<div className="list">{
        users.map((user) => 
        <div className="user-item">
            <img src={user.avatar}/>
            <div className="user_charact">Name:{user.name}</div>
            <div className="user_charact">Age:{user.age}</div>
            <div className="user_charact">Is White:{user.iswhite}</div>
            <div className="del"onClick={() => onDelete(user._id)}>X</div>
        </div>)
    }</div>)
}
export default UserList;