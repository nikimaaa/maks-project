import "./style.css" 
const UserList = ({users}) => {
    return(<div>{
        users.map((user) => <div className="user-item">{user.name}</div>)
    }</div>)
}
export default UserList;