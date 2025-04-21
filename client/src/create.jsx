import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from 'axios';


const Create_old = () => {
    var n=1;
    const navigate = useNavigate()
    const {user} = useParams()
    const [title, setTitle] = useState('')
    const [option, setOption] = useState('')
    var poll=[]
    const [count, setCount] = useState(1)
    const [isPending,setIsPending]=useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/insertpoll', { title, poll, author: user, totalvotes:0,voted:[]})
        .then(result =>{ 
        })
        .catch(err => console.log("Axios Error: ", err))
        navigate(`/${user}/home`)


        
    }
    return ( 
        <div className="Create">
            <Navbar userid={user} />
            <div className="d-flex justify-content-center align-items-center vh-100">

            <h2 className="text-center mb-4">Create New Poll!</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="newtodoTitle" className="form-label">
                   <strong>Todo Title:</strong> 
                    </label>
                <input type='text' required value={title} onChange={(e)=>setTitle(e.target.value)} />
                
                <label>Number of Options: </label>
                <input className="form-control rounded-0" type='text' required value={count} onChange={(e)=>setCount( parseInt(e.target.value) ? e.target.value : 0)} />

                {Array.from({ length: count }, (_, i) => (
                    <div key={i}>
                        <label>Option {i + 1}:</label>
                        <input type='text' required onChange={e => {
                            const newPoll = [...poll];
                            newPoll[i] = {"option": e.target.value, "votes":0};
                            poll = newPoll;
                        }} />
                    </div>
                ))}

                <label>Poll Author:</label>
                
                <input type='text' value={user} readOnly />

                {!isPending && <button>Post Poll</button>}
                {isPending && <button disabled>Posting Poll</button>}
                </div>
            </form>
            </div>
        </div>
    );
}
export default Create_old;