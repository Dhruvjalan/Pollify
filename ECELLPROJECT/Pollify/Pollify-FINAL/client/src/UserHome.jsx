import BlogList from './BlogList';
import Navbar from './Navbar';
import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link  } from "react-router-dom"


const Home = () => {
  const {user} = useParams()
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
  }, []); // Empty dependency array to run once on mount

//   {error && <div>{error}</div> }
//   {isPending && <div>Loading...</div>}
//   {polls && <BlogList polls={polls} title="All Polls!" user={user}/> }

  return ( 
    <div className="Home">
    <Navbar userid={user} />
      <h2>Home Page</h2>
      {polls.length>0? (
        <BlogList blogs={polls} title="All Polls!" user={user}/>
      ) : (
        <div>Loading polls...</div>
      )}    </div>
  );
}

export default Home;
