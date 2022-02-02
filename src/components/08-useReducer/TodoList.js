import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos,handletoggle,handDelete}) => {
  return( 
      <ul 
        className='list-group list-group-flush'
        >
          {
            todos.map( ( todo, i ) =>  (

              <TodoListItem
                key={todo.id}
                todo={todo}
                handletoggle={handletoggle}
                i={i}
                handDelete={handDelete}
              />
            
            ))
          }
          </ul>
 )
};
