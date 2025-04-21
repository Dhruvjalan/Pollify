import TodoList from './TodoList';
import Navbar from './Navbar';
import Habits from './Habits.jsx';
import Money from './Money.jsx';
import MailCard from './Mail'
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { Link  } from "react-router-dom"

const N=0
const Home = () => {
  const {user,theme} = useParams()
  console.log('theme=',theme)
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
      console.log("Updated data:", data);
      // console.log("screentime =", data.Todo);
    }
  }, [data]);
  
//   {error && <div>{error}</div> }
//   {isPending && <div>Loading...</div>}
//   {polls && <BlogList polls={polls} title="All Polls!" user={user}/> }

  return ( 
    <div className="Home">
    <div>
    <Navbar user={data.name} />
      

      {data?.habits&&(
        <Habits data={data.habits} name={user} theme={theme}/>
      )}
      
{data?.money&&(<Money data={data.money} name={user} theme={theme}/>)}
      

      <div className='d-flex flex-row flex-md-nowrap flex-wrap justify-content-evenly' style={{margin: "5rem 1rem"}}>
      <div className='calendar'>
      <h1 style={{justifySelf:'left'}}>Calendar</h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=&ctz=Kolkata/India"
          style={{ border: 0 }}
          width="800"
          height="600"
        />      
      </div>
      <div className=' todo_notes d-flex flex-column flex-wrap justify-content-between' style={{margin:'0 2rem'}}>
      {data?.Todo && (
        <TodoList todos={data.Todo} title="All Todos!"/>
      )}    

<div className='notes  justify-self-center w-auto'>
  <h3>Notes</h3>
    <p>{data?.Notes &&(
      <textarea value={data.Notes} style={{ fontSize: '20px', padding: '10px', width: '100%', color:'#000000'}} readOnly />
    )}</p>
  </div></div></div>
  
  {data?.maillist && (
      <MailCard maillist={data.maillist}/>
  )}
      </div>



 
{/* <div className='Expenditure Chart'>
<ChartComponent name={user} ></ChartComponent>
</div> 

  <div className='Screentime'>
  {data?.screentime_min && (
    <Counter n={data.screentime_min} />
  )}  
  </div> */}
  
</div>

  );
  
}

export default Home;
