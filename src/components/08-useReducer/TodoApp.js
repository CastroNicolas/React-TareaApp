import React, { useEffect, useReducer } from 'react';
import './styless.css'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

import { todoReducer } from './todoReducer';


const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

   

   useEffect(() => {
     localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos]);
   
   const handDelete = (todoid) =>{

    const action = {
      type: 'delete',
      payload: todoid
    }

    dispatch(action)
    
  }

    const handleAddTodo = (newTodo) =>{
      dispatch({
        type: 'add',
        payload: newTodo
      })
    }


  const handletoggle = (todoid) =>{
    dispatch({
      type: 'toggle',
      payload: todoid
    })
  }
  

  return( 
  
  <div>
      <h1> TareasApp ({todos.length}) </h1>
      <hr/>

    <div className='row'>
      
      <div className='col-7'>

        <h3>Eliminar Tareas</h3>
        <hr/>
    
      <TodoList 
      todos={todos}
      handletoggle={handletoggle}
      handDelete={handDelete}
      />
        
      </div>
    
      <div className='col-5'>
      <TodoAdd
        handleAddTodo={handleAddTodo} 
      />
      </div>
  
    </div>

  </div>
  
)};






   