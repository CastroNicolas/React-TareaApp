import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, resert] = useForm({

        description:''
   
      });

      const handleSumit = (e) => {
        e.preventDefault();
  
        if (description.trim().length <= 1 ) {
          return ;
        }
  
        const newTodo = {
          id: new Date().getTime(),
          desc: description,
          done: false
        }
  
        handleAddTodo( newTodo )
        resert()
    }


  return( 
    <>
    <h3>Agregar Tareas</h3>
    <hr/>

        <form onSubmit={handleSumit}>

          <input
          type='text'
          name='description'
          className='form-control'
          placeholder='Aprender ...'
          autoComplete='off'
          value={description}
          onChange={handleInputChange}
          />

          <button
          type='submit'
          className='btn btn-outline-primary m-1 btn-block'
          >Agregar
          </button>
        </form>
        </>
)};
