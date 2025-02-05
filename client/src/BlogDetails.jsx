import { useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";
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
    // const [chartData,setChartData] = useState([])
    // var ip_address = ""
    // const {data: blog, isPending, Error} = useFetch( 'http://localhost:8000/blogs/'+id)
    useEffect(()=>{
        axios.post("http://localhost:4000/getpoll",{id}).then(result=>{
        setBlog(result.data);
        console.log("blog in blogdetails",blog)})
    .catch(err=>{
        console.log("Axios err",err)
    })
},[])
    
    

    // const history= useHistory()
    // const handleClick=()=>{
    //     fetch('http://localhost:8000/blogs/'+id, {method:'DELETE'})
    //     .then(()=>{
    //         // history.push('/')
    //     })
    // }
    const HandleDel = (e)=>{
        console.log("in handledel")
        axios.delete("http://localhost:4000/delpoll/",{data: {id}}).then(
            result=>{
                console.log("Deleted ",result.data)
            }
        ).catch(err=>console.error("error in deleting", err))
        navigate(`/${user}/home`)


    }
    
    const HandleOptionClick=(event)=>{
            console.log("user:", user)
            if (blog.voted.some(vote => vote.user === user)){
                console.log("Already voted")

            }
            else{
                blog.voted.push({user,option_no: event.target.id})
                console.log("Option Clicked",event.target.id)
                blog.poll[event.target.id].votes+=1
                blog.totalvotes+=1
                console.log(blog._id," ",blog.title," option ",blog.poll[event.target.id].option , "Has ",blog.poll[event.target.id].votes,"Votes")
                

                axios.put("http://localhost:4000/updatepoll/"+blog._id, blog)
                    .then(response => {
                        console.log("Updated field:", response);
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
                        className="OptionButton" 
                        onClick={!voted ? HandleOptionClick : null} 
                        id={i} 
                        disabled={voted}
                    >
                        {blog.poll[i].option}  
                        { blog.voted.some(vote => vote.user === user) && ` -  (${Math.round(blog.poll[i].votes*100/blog.totalvotes)}%)`}
                        {blog.voted.some(vote=>vote.user==user && vote.option_no==i) && `--voted`}
                    </button>
                ))}
             {/* <button onClick={&handleClick}>Delete Poll</button> */}
             </div>
             </article>}
             {blog.voted && blog.voted.some(vote => vote.user === user) && <ChartComponent id={id}/>}
             {blog && blog.author === user && <button onClick={HandleDel}>Delete</button>}
            </div>

     );
}
 
export default BlogDetails;