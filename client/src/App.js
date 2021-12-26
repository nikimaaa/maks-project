import UserList from './components/UserList/UserList'
import CreateUser from './components/CreateUser/CreateUser'
import {useState} from 'react'
import {useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link, Redirect} from 'react-router-dom'
import User from './pages/User/User'
import Users from './pages/Users/Users'

function App() {

  return (
    <div className="App">
 
      <BrowserRouter>
     <Link to="/user">User</Link>
      <Link to="/">Users</Link>
      <Routes>
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/*" element={<div>404</div>}/>
        <Route path="/" element={<Users/>}/>
       
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
