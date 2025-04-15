import React from 'react';
import { use } from 'react';
import { Link, useNavigate  } from "react-router-dom"


function TodoList({ todos, title }) {
  console.log("Data in BlogList:", todos);
  const HandleClick =()=>{}
  
  return (
    <div className='todo-list'> <button onclick='HandleClick'>Add</button>
      <h2>{title}</h2>
      {todos.length === 0 ? (
  <div>No todos</div>
) : (
  todos.map((todo, index) => (
    <div className='todo-preview' key={index}>
      <h3>{todo}</h3>
    </div>
  ))
)}
    </div>
  );
}

export default TodoList;