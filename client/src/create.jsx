import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from 'axios';

// import axios from 'axios';

const Create = () => {
    var n=1;
    const navigate = useNavigate()
    const {user} = useParams()
    const [title, setTitle] = useState('')
    const [option, setOption] = useState('')
    var poll=[]
    const [count, setCount] = useState(1)
    const [isPending,setIsPending]=useState(false)
    // const history=useHistory() 
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("poll = ",poll)
        axios.post('http://localhost:4000/insertpoll', { title, poll, author: user, totalvotes:0,voted:[]})
        .then(result =>{ 
            console.log(result)
        })
        .catch(err => console.log("Axios Error: ", err))
        navigate(`/${user}/home`)


        // const blog = {title, poll, author, t_votes: 0,ip: []}
        // setIsPending(true)
        // fetch('http://localhost:8000/blogs',{
        //     method:'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(blog)
        
        // }).then(()=>{
        //     console.log('new blog added')
        //     setIsPending(false)
        //     // history.go(-1)
        //     history.push('/')
        // })
    }
    return ( 
        <div className="Create">
            <Navbar userid={user} />
            <h2>Create New Poll!</h2>
            
            <form onSubmit={handleSubmit}>
                <label>Poll Title:</label>
                <input type='text' required value={title} onChange={(e)=>setTitle(e.target.value)} />
                
                <label>Number of Options: </label>
                <input type='text' required value={count} onChange={(e)=>setCount( parseInt(e.target.value) ? e.target.value : 0)} />

                {Array.from({ length: count }, (_, i) => (
                    <div key={i}>
                        <label>Option {i + 1}:</label>
                        <input type='text' required onChange={e => {
                            const newPoll = [...poll];
                            newPoll[i] = {"option": e.target.value, "votes":0};
                            // newPoll[i] = e.target.value;
                            poll = newPoll;
                        }} />
                    </div>
                ))}

                <label>Poll Author:</label>
                <p>{user}</p>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>
        </div>
    );
}
export default Create;