import React from 'react'


const ToDo = ({ id, todo, completed, deleteTodo }) => {
  return (
    <li>{todo}<button onClick={deleteTodo}>X</button></li>
  )
}

export default ToDo