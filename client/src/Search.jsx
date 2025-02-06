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
  const [text,setText] = useState('You Have 0 Matches') 
  const [isPending, setIsPending] = useState(false)
//   const {polls, isPending, error} = useFetch('http://localhost:4000/getpolls')
  
  useEffect(() => {
    axios.get("http://localhost:4000/getpolls")
      .then(response => {
        setPolls(response.data);
        // setIsPending(false)
      })
      .catch(error => {
        console.error("Error fetching polls:", error);
      });
  }, [searchdata,mode]); // Empty dependency array to run once on mount


  const getMode = (e)=>{
    setMode(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()

    var temp_polls=[]

    
    if(mode==='Poll-Id'){
      polls.forEach(exactpoll=>{
        if(exactpoll._id==searchdata.replace(/\s+/g, '')){
        temp_polls.push(exactpoll)
      }
      })
    }else if(mode==='MyPolls'){
      polls.forEach(element => {
        if(element.author==user){
          temp_polls.push(element)
        }
      });
    }else if(mode==='Title'){
      polls.forEach(element => {
        if(element.title.includes(searchdata)){
          temp_polls.push(element)
        }
      });
    }else if(mode=='all'){
      window.location.reload(true)
    }

    if(temp_polls.length===1)
      setText("You Have 1 Match")
    else
      setText("You Have "+temp_polls.length+" Matches")

    setPolls(temp_polls)

 
  }


  return ( 
    
    <div className="Home">
<Navbar userid={user} />
    <div className='Create'>
    <h2>Search For Polls</h2>

    <form onSubmit={handleSubmit}> 
                
                <select name="mode" onChange={getMode}>
                <option value="all">All</option>
                <option value="MyPolls">My Polls</option>
                <option value="Poll-Id">By Poll id</option>
                <option value="Title">By Title</option>
                </select>
                {mode && mode!='MyPolls'&& mode!='all'&& <label>Enter {mode}</label>}
{                mode && mode!='MyPolls'&& mode!='all'&& <input type='text' value={searchdata} onChange={e=>{
                    setSearchData(e.target.value)
                    
                    }}/>
}                {!isPending && <button type='submit'>Search</button>}
                {isPending && <button disabled>Searching...</button>}
            </form> 
      </div>      

      {polls.length>=0? (
        <BlogList blogs={polls} title={text} user={user}/>
      ) : (
        <div>Loading polls...</div>
      )}    </div>
  );
}

export default Search;
