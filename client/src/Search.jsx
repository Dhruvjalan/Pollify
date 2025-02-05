import BlogList from './BlogList';
import Navbar from './Navbar';
import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link  } from "react-router-dom"


const Search = () => {
  const {user,mode} = useParams()
  const [polls,setPolls] = useState([]) 
//   const {polls, isPending, error} = useFetch('http://localhost:4000/getpolls')
  
  useEffect(() => {
    axios.get("http://localhost:4000/getpolls")
      .then(response => {
        console.log("Data in Home:", response.data);
        setPolls(response.data);
        // setIsPending(false)
      })
      .catch(error => {
        console.error("Error fetching polls:", error);
      });
  }, []); 
  const handleSubmit=()=>{
    axios.post("http://localhost:4000/getpoll",{id: e.target.value.id}).then(result=>{
      setBlog(result.data);
      console.log(blog)})
  .catch(err=>{
      console.log("Axios err",err)
  })
  }

  return ( 
    <div className="Submit">
    <Navbar userid={user} />
    <form onSubmit={handleSubmit}>
                
                <label>Enter Poll id</label>
                <input type='text' required value={count} onChange={(e)=>setCount( parseInt(e.target.value) ? e.target.value : 0)} />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>
      <h2>Search Page</h2>
      {polls.length>0? (
        <a><BlogList blogs={polls} title="All Polls!" user={user}/></a>
      ) : (
        <div>Loading polls...</div>
      )}    </div>
  );
}

export default Search;
