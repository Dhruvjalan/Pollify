import { useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import ChartComponent from "./Chart";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
const BlogDetails = () => {

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
    })},[])
    
    

    // const history= useHistory()
    // const handleClick=()=>{
    //     fetch('http://localhost:8000/blogs/'+id, {method:'DELETE'})
    //     .then(()=>{
    //         // history.push('/')
    //     })
    // }

    
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
             <p>Written By: {blog.author}</p>
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
             <ChartComponent id={id}/>
            </div>

     );
}
 
export default BlogDetails;