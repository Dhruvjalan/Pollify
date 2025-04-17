import TodoList from './TodoList';
import Navbar from './Navbar';
import useFetch from './useFetch';
import ScChartComponent from './BarChart.jsx'
import Habits from './Habits.jsx';
import Money from './Money.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ChartComponent from "./ExpenditureChart";
import Counter from './counter';
import MailCard from './Mail'

import { useParams } from 'react-router-dom';
import { Link  } from "react-router-dom"

const N=0
const Home = () => {
  const {user} = useParams()
  const [data,setData] = useState([]) 
//   const {polls, isPending, error} = useFetch('http://localhost:4000/getpolls')
  
  useEffect(() => {
    // console.log('line 18 in userhome');
    axios.post("http://localhost:4000/getuserdata", {
      name: user  // <user> is your logged-in username
    })
    .then(response => {
      // console.log("21 in userhome");
      // console.log("Data in Home:", response.data);
      setData(response.data);
      // console.log(data)
      // console.log('screentime=',data.screentime_min)
    })
    .catch(error => {
      console.error("Error fetching user data:", error);
    });
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    if (data) {
      // console.log("Updated data:", data);
      // console.log("screentime =", data.Todo);
    }
  }, [data]);
  
//   {error && <div>{error}</div> }
//   {isPending && <div>Loading...</div>}
//   {polls && <BlogList polls={polls} title="All Polls!" user={user}/> }

  return ( 
    <div className="Home">
    <div>
    <Navbar userid={user} />
      <h1>Home Page</h1>

      {data?.habits&&(
        <Habits data={data.habits} name={user}/>
      )}
      
{data?.money&&(<Money data={data.money} name={user}/>)}
      

      <div class='d-flex flex-row justify-content-evenly' style={{margin: "5rem 1rem"}}>
      <div class='calendar'>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=&ctz=Kolkata/India"
          style={{ border: 0 }}
          width="800"
          height="600"
        />      
      </div>
      <div class=' todo_notes d-flex flex-row flex-wrap' style={{margin:'0 2rem'}}>
      {data?.Todo && (
        <TodoList todos={data.Todo} title="All Todos!"/>
      )}    

<div class='notes align-self-center justify-self-center w-auto'>
  <h3>Notes</h3>
    <p>{data?.Notes &&(
      <textarea value={data.Notes} style={{ fontSize: '20px', padding: '10px', width: '100%' }} readOnly />
    )}</p>
  </div></div></div>
  
  {data?.maillist && (
      <MailCard maillist={data.maillist}/>
  )}
      </div>



 
{/* <div class='Expenditure Chart'>
<ChartComponent name={user} ></ChartComponent>
</div> 

  <div class='Screentime'>
  {data?.screentime_min && (
    <Counter n={data.screentime_min} />
  )}  
  </div> */}
  
</div>

  );
  
}

export default Home;
