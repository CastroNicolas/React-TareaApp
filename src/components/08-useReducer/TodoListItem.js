import React from 'react';

export const TodoListItem = ({ todo,handletoggle, i, handDelete }) => {
  return (
    <li
    key={todo.id}
    className='list-group-item'
    >
    <p 
      onClick={ () => handletoggle(todo.id)}
      className={ `${ todo.done && 'complete' }` }
    >  
      {i + 1}.{todo.desc} 
    </p>

    <button 
    className='btn btn-danger'
    onClick={ () => handDelete(todo.id)}
    >
         Borrar
    </button>

    </li>
)};
