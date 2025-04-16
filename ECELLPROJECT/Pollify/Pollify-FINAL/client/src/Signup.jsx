import {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup(){

    const [name,setName] = useState()
    const [password,setPassword] = useState()
    const [text,setText] = useState('')
    const [texttodisp,setTexttodisp] = useState('')
    
    const navigate = useNavigate()
    
    const handleSubmit = e=>{
        e.preventDefault()
        
        axios.post('http://localhost:4000/login', { name, password })
        .then(result =>{ 
            console.log(result)
            // if(result.data === 'Success'){
            //     navigate(`/${name}/home`)
            // }
            setText(result.data)

        })

        if(text==='User Does Not Exists'){
        {axios.post('http://localhost:4000/register', { name, password })
        .then(result =>{ 
            console.log(result)
            navigate('/login')
        })
        .catch(err => console.log("Axios Error: ", err))}
    }else{
        setTexttodisp("User Already Exists");
        console.log("User Already exists")
    }

    
    


    }
    return(
        <div className="d-flex justify-content-center align-items-center vh-100" >
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
                    <button type="submit" className="btn btn-success w-100 rounded-0" style={{ backgroundColor: '#f1356d' }} onClick={handleSubmit}>
                        Register
                    </button>
                    </form>
                    <p>{texttodisp}</p>
                    <a href='/login'>Login</a>
            </div>
        </div>
    )
}

export default Signup