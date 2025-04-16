import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [name,setName] = useState()
    const [password,setPassword] = useState()
    const [text,setText] = useState('')

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        axios.post('http://localhost:4000/login', { name, password })
        .then(result =>{ 
            console.log(result)
            if(result.data === 'Success'){
                navigate(`/${name}/home`)
            }
            setText(result.data)

        })
        .catch(err => console.log("Axios Error: ", err))
        console.log('name: ',name)
        console.log('Password:', password);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Log - In</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            autoComplete="off"
                            name='name'
                            className="form-control rounded-0"
                            onChange={e=>setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="Password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name='password'
                            className="form-control rounded-0" 
                            onChange={e=>setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0" onClick={handleSubmit} style={{ backgroundColor: '#f1356d' }}>
                        Login
                    </button>
                    </form>
                    <p>{text}</p>
                    {/* <Link to = "/login" type="submit" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"> */}
                        <p>Don't Have an account?</p>
                        <a href='/register'> Register here</a>
                    {/* </Link> */}
            </div>
        </div>
    );
};

export default Login;