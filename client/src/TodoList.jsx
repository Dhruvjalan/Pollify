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
        _id: user,
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
    <h1 className="todo-title">{title}</h1>

    <Link to={`/${user}/create`} className="new-todo-btn">New Todo</Link>

    {todos.length === 0 ? (
        <div>No todos</div>
    ) : (
        todos.map((todo, index) => (
            <div className="todo-grid" key={index}>
                <input
                    type='checkbox'
                    name='donetoggle'
                    className='grid-box checkbox'
                    onChange={() => toggleRadioButton(index)}
                />
                <h3 className={`todo-text ${struckIndices[index] ? "struck" : ""}`}>{todo}</h3>
                <div className='buttons'>
                    <button className='todo-btn delete-btn' onClick={()=>HandleDel(index)}>Delete</button>
                    <Link className='todo-btn edit-btn' to={`/${user}/edit/${index}`} >Edit</Link>
                </div>
            </div>
        ))
    )}
</div>

    );
  };

export default TodoList;
