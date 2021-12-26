import { useParams } from "react-router-dom"
import {useState} from 'react'
import {useEffect} from 'react'
import './style.css'
const User = () => {
    const {id} = useParams();
        const [user, setUser] = useState(null)
    useEffect(async ()=>{
      const response = await fetch(`/api/user/${id}`, {method: 'GET'});
      setUser(await response.json());
    }, [])
    console.log(user);
    if(!user){
        return null;
    }
    return(
        <div className="userbody">
            <img src={user.avatar}></img>
            <div className="info">
            <div className="name">{user.name}</div>
            <div className="desc">{user.desc}</div>
            <div className="id">{id}</div>
            </div>
            </div>
    )
}
export default User