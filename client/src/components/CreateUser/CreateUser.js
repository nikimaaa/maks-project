import {useCallback, useEffect, useState} from 'react';
const CreateUser = () => {
    const [form, setForm] = useState({
        name: "",
        password: "",
        avatar: "",
        age: "",
        desc: "",
        iswhite: "",
    });

    const onChange = useCallback((event) => {
        const name = event.target.name;
        const value = event.target.value; 
        setForm({...form, [name]: value});
    }, [form])

    useEffect(() => {
        console.log(form)
    }, [form]);
    return <div className="form wrapper">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" onInput={onChange}></input>
            <label for="password">Password</label>
            <input type="password" name="password" id="password"onInput={onChange}></input>
            <label for="avatar">Avatar</label>
            <input type="text" name="avatar" id="avatar"onInput={onChange}></input>
            <label for="age">Age</label>
            <input type="number" name="age" id="age"onInput={onChange}></input>
            <label for="desc">Description</label>
            <input type="text" name="desc" id="desc"onInput={onChange}></input>
            <label for="iswhite">Is White?</label>
            <input type="checkbox" name="iswhite" id="iswhite"onInput={onChange}></input>
            <button>Create</button>
        </div>
}
export default CreateUser;