import {useCallback, useEffect, useState} from 'react';
import axios from 'axios' 
const userdefaultstate = {
    name: "",
    password: "",
    avatar: "",
    age: "",
    desc: "",
    iswhite: "",
};
const CreateUser = ({setUsers,users}) => {
    const [form, setForm] = useState(userdefaultstate);

    const onChange = useCallback((event) => {
        const name = event.target.name;
        const value = event.target.value; 
        setForm({...form, [name]: value});
    }, [form])

    useEffect(() => {
        console.log(form)
    }, [form]);

    const onSubmit = useCallback(async()=>{
        const responce = await axios.post('/api/user', form);
        setForm(userdefaultstate);
        setUsers([...users, responce.data])
    },[form, setForm]);

    return <div className="form wrapper">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" onInput={onChange} value={form.name}></input>
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password"onInput={onChange} value={form.password}></input>
        </div>
        <div>
            <label for="avatar">Avatar</label>
            <input type="text" name="avatar" id="avatar"onInput={onChange} value={form.avatar}></input>
        </div>
        <div>
            <label for="age">Age</label>
            <input type="number" name="age" id="age"onInput={onChange} value={form.age}></input>
        </div>
        <div>
            <label for="desc">Description</label>
                <input type="text" name="desc" id="desc"onInput={onChange} value={form.desc}></input>
        </div>
        <div>
            <label for="iswhite">Is White?</label>
            <input type="checkbox" name="iswhite" id="iswhite"onInput={onChange} value={form.name}></input>
        </div>
            <button onClick={onSubmit}>Create</button>
        </div>
}
export default CreateUser;