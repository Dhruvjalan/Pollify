import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useState } from "react";
const BlogDetails = () => {

    const { id }=useParams()
    const [voted,setVoted] = useState(false)
    const [isLoading,setisLoading] = useState(false)
    var ip_address = ""
    const {data: blog, isPending, Error} = useFetch( 'http://localhost:8000/blogs/'+id)

    const getIPAddress = async () => {
        try {
          const response = await fetch('https://api.ipify.org?format=json');
          const data = await response.json();
          console.log(data.ip," Is your ip");

          return data.ip; // Returns the IP address
        } catch (error) {
            console.log("Error in getting ip");
            console.error('Error fetching IP address:', error);
          return null;
        }
      };

    const history= useHistory()
    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+id, {method:'DELETE'})
        .then(()=>{
            history.push('/')
        })
    }

    const hasVoted=()=>{
        getIPAddress().then(ip => {

            console.log("Callback IP address:", ip)
            if (blog.ip.includes(ip)){
                console.log("Already voted")
                setVoted(true)

            }
            else{
                setVoted(false)
            }

        })
        .catch(error => console.error("Callback Error:", error))
        
    }
    const HandleOptionClick=(event)=>{
        setVoted(true)
        getIPAddress().then(ip => {
            console.log("Callback IP address:", ip)
            if (blog.ip.includes(ip)){
                console.log("Already voted")

            }
            else{
                blog.ip.push(ip)
                console.log("Option Clicked",event.target.id)
        blog.poll[event.target.id].votes+=1
        blog.t_votes+=1
        console.log(blog.poll[event.target.id].option , "Has ",blog.poll[event.target.id].votes,"Votes")
        fetch('http://localhost:8000/blogs/'+id, {method:'DELETE'})
        .then(()=>{
            history.push('/')
        }) 
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        
        }).then(()=>{
            console.log('new blog added')
            // setIsPending(false)
            // history.go(-1)
            history.push('/')
        })

            }

        })
        .catch(error => console.error("Callback Error:", error))
        
        
        
    }
    return ( 
        <div className="blog-details">
            {(isPending || isLoading) &&<div>Loading...</div>}
            {Error && <div>{Error}</div>}
            {blog && <article>
                {console.log(blog)}
             <h2>{blog.title}</h2>
             <p>Written By: {blog.author}</p>
             <div className="Buttons">
             {/* {hasVoted()} */}

             {Array.from({ length: blog.poll.length }, (_, i) => (
                    <button 
                        className="OptionButton" 
                        onClick={!voted ? HandleOptionClick : null} 
                        id={i} 
                        disabled={voted}
                    >
                        {hasVoted()}
                        {blog.poll[i].option}  
                        {voted && ` -  (${Math.round(blog.poll[i].votes*100/blog.t_votes)}%)`}
                    </button>
                ))}
             <button onClick={handleClick}>Delete Poll</button>
             </div>
             </article>}
            </div>

     );
}
 
export default BlogDetails;