export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { 
        id: Date.now(), 
        todo: action.todo, 
        completed: false 
      }]
    case 'DELETE_ALL_TODOS':
      return []

    case 'DELETE_TODO':
      state.splice(action.index, 1)
      return [...state]
    default:
      return state;
  }
}