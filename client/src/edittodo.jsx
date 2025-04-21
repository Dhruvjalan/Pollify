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
        navigate(0)
      };

      return (
        <div>
        <Navbar userid={user} />

        <div className="d-flex justify-content-center align-items-center vh-100">

            <div className="bg-white p-4 rounded w-25">
    
                <h2 className="text-center mb-4" style={{color: 'black'}}>Edit Todo!</h2>
    
                <form onSubmit={HandleEdit}>
                    <div className="mb-3">
                        <label htmlFor="todoTitle" className="form-label">
                            <strong><h5 style={{color: 'black'}}>New Todo Title:</h5></strong>
                        </label>
                        <input
                            id="todoTitle"
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="form-control rounded-0"
                        />
                    </div>
    
                    {!isPending && (
                        <button type="submit" className="btn btn-primary w-100 rounded-0">
                            Edit Todo
                        </button>
                    )}
                    {isPending && (
                        <button disabled className="btn btn-secondary w-100 rounded-0">
                            Editing Todo...
                        </button>
                    )}
                </form>
            </div>
        </div>
        </div>
    );
    
}
export default Edit;