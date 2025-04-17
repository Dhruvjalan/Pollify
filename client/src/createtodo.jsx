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
        navigate(0)


        
    }
    return ( 
        <div className="Create">
            <Navbar userid={user} />
            <h2>Create New Todo!</h2>
            
            <form onSubmit={handleSubmit}>
                <label>Todo Title:</label>
                <input type='text' required value={title} onChange={(e)=>setTitle(e.target.value)} />
                
                {!isPending && <button>AddTodo</button>}
                {isPending && <button disabled>Adding Todo</button>}
            </form>
        </div>
    );
}
export default Create;