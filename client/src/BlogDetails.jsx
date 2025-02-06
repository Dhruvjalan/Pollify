import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import ChartComponent from "./Chart";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
const BlogDetails = () => {
    const navigate = useNavigate()
    const { user, id }=useParams()
    const [blog,setBlog] = useState({})
    const [voted,setVoted] = useState(false)
    const [isLoading,setisLoading] = useState(false)
    const [isPending,setisPending] = useState(false)
    useEffect(()=>{
        axios.post("http://localhost:4000/getpoll",{id}).then(result=>{
        setBlog(result.data);
        })
    .catch(err=>{
    })
},[])
    
    

    const HandleDel = (e)=>{
        axios.delete("http://localhost:4000/delpoll/",{data: {id}}).then(
            result=>{
                console.log("Deleted ",result.data)
            }
        ).catch(err=>console.error("error in deleting", err))
        navigate(`/${user}/home`)


    }
    
    const HandleOptionClick=(event)=>{
            if (blog.voted.some(vote => vote.user === user)){

            }
            else{
                blog.voted.push({user,option_no: event.target.id})
                blog.poll[event.target.id].votes+=1
                blog.totalvotes+=1
                

                axios.put("http://localhost:4000/updatepoll/"+blog._id, blog)
                    .then(response => {
                    })
                    .catch(error => {
                        console.log("Error updating poll:", error);
                    });
                    window.location.reload();

            }

        
        
        
        
    }
    return ( 
        <div className="blog-details">
            <Navbar userid={user}/>
            {(isPending || isLoading) &&<div>Loading...</div>}
            {Error && <div>{Error}</div>}
            {blog && <article>
                {console.log(blog)}
             <h2>{blog.title}</h2>
             <p>Posted By: {blog.author}</p>
             <div className="Buttons">

             {blog.poll && Array.from({ length: blog.poll.length }, (_, i) => (
                    <button 
                        className={`OptionButton${Number(blog.voted.some(vote=>vote.user==user && vote.option_no==i))}`}
                        onClick={!voted ? HandleOptionClick : null} 
                        id={i} 
                        disabled={voted}
                    >
                        {blog.poll[i].option}  
                        { blog.voted.some(vote => vote.user === user) && ` -  (${Math.round(blog.poll[i].votes*100/blog.totalvotes)}%)`}
                        {blog.voted.some(vote=>vote.user==user && vote.option_no==i) && ` *`}
                    </button>
                ))}
                <br />
                {blog && blog.author === user && <button onClick={HandleDel} className="w-25">Delete</button>}

             </div>
             </article>}
             <h5>How to Share this poll?</h5>
            <p> Send the Pollid: {blog._id} and search polls by ID</p>
             {blog.voted && blog.voted.some(vote => vote.user === user) && <ChartComponent id={id}/>}
            </div>

     );
}
 
export default BlogDetails;