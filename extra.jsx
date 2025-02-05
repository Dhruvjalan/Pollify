import BlogList from './BlogList';
import Navbar from './Navbar';
import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link  } from "react-router-dom"


const Search = () => {
  const {user} = useParams()
  const [mode,setMode] = useState(null)
  const [searchdata,setSearchData] = useState('')
  const [polls,setPolls] = useState({}) 
  const [isPending, setIsPending] = useState(false)
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
}, []); // Empty dependency array to run once on mount 
  const getMode = (e)=>{
    setMode(e.target.value)
    console.log("Mode selected: ",e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("In handleSubmit: with mode ",mode+" data "+searchdata)
    console.log(polls)
    if(mode==='ByPollid'){
      
    }

  //   axios.post("http://localhost:4000/getpoll",{id: e.target.value.id}).then(result=>{
  //     setBlog(result.data);
  //     console.log(blog)})
  // .catch(err=>{
  //     console.log("Axios err",err)
  // })
  }

  return ( 
    <div className="Submit">
    <Navbar userid={user} />
    <form onSubmit={handleSubmit}> 
                
                <select name="mode" onChange={getMode}>
                <option value="">--Select--</option>
                <option value="MyPolls">My Polls</option>
                <option value="ByPollid">By Poll id</option>
                <option value="ByTitle">By Title</option>
                </select>
                {mode && mode!='MyPolls'&& <label>Enter {mode}</label>}
{                mode && <input type='text' value={searchdata} onChange={e=>setSearchData(e.target.value)}/>
}                {!isPending && <button type='submit'>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>
      <h2>Search Page</h2>
      {polls? (
        <a><BlogList blogs={polls} title="All Polls!" user={user}/></a>
      ) : (
        <div>Loading polls...</div>
      )}    </div>
  );
}

export default Search;
