import { connect } from 'react-redux';

import Footer from '../components/Footer';
import { filterAll, filterActive, filterDone, activeAllTodo, doneAllTodo } from '../actions';


const mapDispatchToProps = function(dispatch) {
  return {
    filterAll : () => dispatch(filterAll()),
    filterActive : () => dispatch(filterActive()),
    filterDone : () => dispatch(filterDone()),
    activeAllTodo : () => dispatch(activeAllTodo()),
    doneAllTodo : () => dispatch(doneAllTodo())
  }
}

const mapStateToProps = state => {
  return {
    //todos : state.todos // Without combineReducers
    todos : state.todosList.todos
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Footer);
