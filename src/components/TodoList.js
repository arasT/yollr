import React from 'react';
import '../App.css';

import TodoItem from '../containers/TodoItemContainer.js'


function TodoList(props) {
  const listOfTodos = props.listOfTodos;

  const renderTodo = listOfTodos.map(
    todo => <TodoItem key={todo.id} todoInfo={todo} />
  );

  return (
    <table className="table-striped">
      <thead>
        <tr><th>Done</th><th>Description</th><th>Delete</th></tr>
      </thead>
      <tbody>
        {renderTodo}
      </tbody>
    </table>
  );
}


export default TodoList;
