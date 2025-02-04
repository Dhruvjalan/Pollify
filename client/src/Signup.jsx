import {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup(){

    const [name,setName] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = e=>{
        e.preventDefault()
        axios.post('http://localhost:4000/register', { name, password })
        .then(result =>{ 
            console.log(result)
            navigate('/login')
        })
        .catch(err => console.log("Axios Error: ", err))

    
    


    }
    return(
        <div className="d-flex justify-content-center clign-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
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
                    <button type="submit" className="btn btn-success w-100 rounded-0" onClick={handleSubmit}>
                        Register
                    </button>
                    </form>
                    <p>Already Have an Account</p>
                    {/* <Link to = "/login" type="submit" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"> */}
                        <a href='/login'>Login</a>
                    {/* </Link> */}
            </div>
        </div>
    )
}

export default Signup