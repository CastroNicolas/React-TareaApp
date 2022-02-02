const inicialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]

const todoReducer = (state = inicialState, action) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload]
    }

    return state
}

let todos = todoReducer()

const newTodos = {
    id: 2,
    todo: 'Comprar queso',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodos 
}

todos = todoReducer( todos, agregarTodoAction )

console.log(todos);
