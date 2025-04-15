import TodoList from './TodoList';
import Navbar from './Navbar';
import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ChartComponent from "./Chart";
import Counter from './counter';
import { useParams } from 'react-router-dom';
import { Link  } from "react-router-dom"

const N=0
const Home = () => {
  const {user} = useParams()
  const [data,setData] = useState([]) 
//   const {polls, isPending, error} = useFetch('http://localhost:4000/getpolls')
  
  useEffect(() => {
    console.log('line 18 in userhome');
    axios.post("http://localhost:4000/getuserdata", {
      name: user  // <user> is your logged-in username
    })
    .then(response => {
      console.log("21 in userhome");
      console.log("Data in Home:", response.data);
      setData(response.data);
      console.log(data)
      console.log('screentime=',data.screentime_min)
    })
    .catch(error => {
      console.error("Error fetching user data:", error);
    });
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    if (data) {
      console.log("Updated data:", data);
      console.log("screentime =", data.Todo);
    }
  }, [data]);
  
//   {error && <div>{error}</div> }
//   {isPending && <div>Loading...</div>}
//   {polls && <BlogList polls={polls} title="All Polls!" user={user}/> }

  return ( 
    <div className="Home">
    <div>
    <Navbar userid={user} />
      <h2>Home Page</h2>
      {data?.Todo && (
        <TodoList todos={data.Todo} title="All Todos!"/>
      )}    </div>
      <div class='calendar'>
      <iframe
  src="https://calendar.google.com/calendar/embed?src=&ctz=Kolkata/India"
  style={{ border: 0 }}
  width="800"
  height="600"
/>      </div>


 
<div class='Expenditure Chart'>
<ChartComponent name={user} ></ChartComponent>
</div> 

  <div class='Screentime'>
  {data?.screentime_min && (
    <Counter n={data.screentime_min} />
  )}  
  </div>
  <div class='notes'>
    <p>{data?.Notes &&(
      <p>{data.Notes}</p>
    )}</p>
  </div>
</div>

  );
  
}

export default Home;
