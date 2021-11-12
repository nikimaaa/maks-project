import UserList from './components/UserList/UserList'
import CreateUser from './components/CreateUser/CreateUser'
import {useState} from 'react'
import {useEffect} from 'react'
function App() {
  const [users, setUsers] = useState([])
  useEffect(async ()=>{
    const response = await fetch('/api/user', {method: 'GET'});
    setUsers(await response.json());
  }, [])
  return (
    <div className="App">

     <CreateUser/>
     <UserList users={users}/>
    </div>
  );
}

export default App;
