// action creator - requires a TYPE and a PAYLOAD
export const addToDo = (todo, name) => ({
  type: 'ADD_TODO',
  todo,
  name
})

export const deleteAllTodos = () => ({
  type: 'DELETE_ALL_TODOS'
})

export const deleteTodo = (index) => ({
  type: 'DELETE_TODO',
  index
})

// payload is not required 