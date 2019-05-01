import { connect } from 'react-redux';

import TodoItem from '../components/TodoItem';
import { toggleTodo, editTodo, deleteTodo } from '../actions';

const mapDispatchToProps = function (dispatch) {
  return {
    toggleTodo : (id) => dispatch(toggleTodo(id)),
    deleteTodo : (id) => dispatch(deleteTodo(id)),
    editTodo : (id, title) => dispatch(editTodo(id, title))
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
