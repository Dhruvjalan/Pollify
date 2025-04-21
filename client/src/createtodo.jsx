import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from 'axios';


const Create = () => {
    var n=1;
    const navigate = useNavigate()
    const {user} = useParams()
    const [title, setTitle] = useState('')
    const [option, setOption] = useState('')
    var poll=[]
    const [count, setCount] = useState(1)
    const [isPending,setIsPending]=useState(false)
    const handleSubmit = (e)=>{
        console.log('in handle submit')
        e.preventDefault()
        axios.put('http://localhost:4000/addtodo', { name: user, todoItem: title})
        .then(result =>{ 
            console.log('Result =',result)
        })
        .catch(err => console.log("Axios Error: ", err))
        navigate(`/${user}/home`)
        // navigate(0)


        
    }
    return ( 
        <div>
            <Navbar userid={user} />
            <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-4 rounded w-25">
            <h2 className="text-center mb-4" style={{color: 'black'}}>Create New Todo!</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="newtodoTitle" className="form-label">
                    <strong style={{color: 'black'}}>Todo Title:</strong>
                    </label>
                <input 
                id='todoTitle'
                type='text' 
                className="form-control rounded-0" 
                required 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)} />
                
                {!isPending && <button className="btn btn-primary w-100 rounded-0">AddTodo</button>}
                {isPending && <button disabled className="btn btn-secondary w-100 rounded-0">Adding Todo</button>}
                </div>
            </form>
        </div></div>
        </div>
    );
}
export default Create;