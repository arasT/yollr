import { connect } from 'react-redux';

import App from '../App';
//import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from '../constants/filter-types';
import { ACTIVE_TODOS, DONE_TODOS } from '../constants/filter-types';


const mapStateToProps = state => {
  //return { todos : state.todos, todoFilter : state.todoFilter }; // Without combineReducer()

  //return { todos : state.todosList.todos, todoFilter : state.todosFilter.todoFilter };

  return {
    todos : getTodoToDisplay(state.todosList.todos, state.todosFilter.todoFilter),
    todoFilter : state.todosFilter.todoFilter
  };
};


function getTodoToDisplay(allTodos, todoFilter) {
  const todoToDisplay = allTodos.filter(t => {
    switch (todoFilter) {
      case ACTIVE_TODOS:
        return t.done ? null : t;
      case DONE_TODOS:
        return t.done ? t : null;
      default:  // ALL_TODOS
        return t;
    }
  }).map(t => t);

  return todoToDisplay;
}


export default connect(mapStateToProps)(App);
