import React from 'react';
import { use } from 'react';
import { Link, useNavigate  } from "react-router-dom"


function TodoList({ todos, title }) {
  // console.log("Data in TodoList:", todos);
  const HandleDel =()=>{}
  const HandleEdit =()=>{}
  
  return (
    <div className='todo-list'> <button onClick={HandleClick}>Add</button>
      <h2>{title}</h2>
      {todos.length === 0 ? (
  <div>No todos</div>
) : (
  todos.map((todo, index) => (
    <div className='todo-preview' key={index}>
      <h3>{todo}</h3>
      <button onClick={HandleDel} key={index}>Delete</button>
      <button onClick={HandleEdit} key={index}>Edit</button>
    </div>
  ))
)}
    </div>
  );
}

export default TodoList;