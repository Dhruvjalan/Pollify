import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from 'axios';


const Edit = () => {
    var n=1;
    const navigate = useNavigate()
    const {user,index} = useParams()
    const [title, setTitle] = useState('')
    const [option, setOption] = useState('')
    var poll=[]
    const [count, setCount] = useState(1)
    const [isPending,setIsPending]=useState(false)
    const HandleEdit = (e) => {
        e.preventDefault()
        console.log("Edit clicked for index:", index,'user=', user);
        // Add your logic to edit the todo here
        axios.put("http://localhost:4000/edittodo",{
          
            name:user,
            index:index,
            todoItem: title
          })
        .then(result=>
          {console.log("Result of edit ",result)})
          .catch(err=>
            {console.log('axios error:',err)})

        navigate(`/${user}/home`)

      };

    return ( 
        <div className="Create">
            <Navbar userid={user} />
            <h2>Edit Todo!</h2>
            
            <form onSubmit={HandleEdit}>
                <label>New Todo Title:</label>
                <input type='text' required value={title} onChange={(e)=>setTitle(e.target.value)} />
                
                {!isPending && <button>Edit Todo</button>}
                {isPending && <button disabled>Editting Todo</button>}
            </form>
        </div>
    );
}
export default Edit;