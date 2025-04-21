import React from 'react';
import { use } from 'react';
import { Link, useNavigate,useParams } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react';



const TodoList = ({ todos, title }) => {
  // Add Todo Handler
  const {user} = useParams()
  const [struckIndices, setStruckIndices] = useState(Array(todos.length).fill(false));
  const navigate = useNavigate()
  const HandleClick = () => {
    console.log("Add button clicked");
    // Add your logic to add a todo here
  };

  // Delete Todo Handler
  const HandleDel = (index) => {
    console.log("Delete clicked for index:", index, "todoname=", todos[index], 'user=', user);
  
    axios.delete("http://localhost:4000/deletetodo", {
      data: {
        name: user,
        todoItem: todos[index]
      }
    })
    .then(result => {
      console.log("Result of delete", result);
    })
    .catch(e => {
      console.log('Axios Error:', e);
    });
    navigate(0)
  };
  
  const toggleRadioButton = (index)=>{
      const updated = [...struckIndices]
      updated[index] = !updated[index]
      setStruckIndices(updated)
  }

  // Edit Todo Handler
  

  return (
      <div className='todo-list justify-self-right'>
              <h1 style={{justifySelf:'left',marginBottom:'2rem'}}>{title}</h1>

      <Link to={`/${user}/create`} style={{background:'#01DFFF',borderRadius:'0.2rem',borderColor:'#000000',borderWidth:'1px',color:'white',textDecoration:'none',marginBottom:'2rem 0.5rem', padding:'0.2rem 0.5rem' }}>New Todo</Link>      
        {todos.length === 0 ? (
          <div>No todos</div>
        ) : (
          todos.map((todo, index) => (
            
            <div className="d-grid" style={{gridTemplateColumns: "0.5fr 2fr 1fr 1fr"}} key={index}>

              <input type='checkbox' name='donetoggle' className='grid-box' style={{transform:'scale(0.5)'}} onChange={()=>toggleRadioButton(index)}/>
              <h3 style={{justifySelf:'flex-start', textDecoration: struckIndices[index] ? "line-through" : "none"}}>{todo}</h3>
              <div className='buttons grid-box' style={{display:'flex',flexDirection:'row', justifySelf:'flex-end'}}>
              <button className='grid-box' onClick={() => HandleDel(index)} style={{background:'#1e90ff',borderRadius:'0.4rem',color:'white', margin:'0 0.5rem',padding:"0 0.2rem",justifySelf:'flex-end'}}>Delete</button>
              <Link className='grid-box' to={`/${user}/edit/${index}`} style={{background:'#00BFFF',borderRadius:'0.2rem',borderColor:'#000000',borderWidth:'1px',color:'white',textDecoration:'none',margin:'0 0.5rem', padding:'0.2rem 0.5rem',justifySelf:'flex-end' }}>Edit</Link>
            </div>
            </div>
          ))
        )}
      </div>
    );
  };

export default TodoList;
