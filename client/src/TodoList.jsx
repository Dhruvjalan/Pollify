import React from 'react';
import { use } from 'react';
import { Link, useNavigate,useParams } from "react-router-dom"
import axios from 'axios'



const TodoList = ({ todos, title }) => {
  // Add Todo Handler
  const {user} = useParams()
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
  

  // Edit Todo Handler
  

  return (
    <div className='todo-list'>
    <Link to={`/${user}/create`} style={{background:'#01DFFF',borderRadius:'0.2rem',borderColor:'#000000',borderWidth:'1px',color:'white',textDecoration:'none',margin:'0 0.5rem', padding:'0.2rem 0.5rem' }}>New Todo</Link>      <h2>{title}</h2>
      {todos.length === 0 ? (
        <div>No todos</div>
      ) : (
        todos.map((todo, index) => (
          <div className='todo-preview' key={index}>
            <h3>{todo}</h3>
            <button onClick={() => HandleDel(index)} style={{background:'#1e90ff',borderRadius:'0.4rem',color:'white', margin:'0 0.5rem',padding:"0 0.2rem"}}>Delete</button>
            {/* <button onClick={() => HandleEdit(index)}>Edit</button> */}
            <Link to={`/${user}/edit/${index}`} style={{background:'#00BFFF',borderRadius:'0.2rem',borderColor:'#000000',borderWidth:'1px',color:'white',textDecoration:'none',margin:'0 0.5rem', padding:'0.2rem 0.5rem' }}>Edit</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
