import React from 'react'
import ToDo from '../components/ToDo'
import { connect } from 'react-redux'

const ToDoList = ({ todos, deleteTodo }) => {
  const displayTodos = todos.map((todo, i) => {
    return (
      <ToDo
        {...todo}
        key={todo.id}
        deleteTodo={() => deleteTodo(i)}
      />
    )
  })

  return (
    <ul>
      {displayTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    deleteAll: () => dispatch({ type: 'DELETE_ALL_TODOS' }),
    deleteTodo: (index) => dispatch({ type: 'DELETE_TODO', index })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
