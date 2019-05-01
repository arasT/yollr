import { connect } from 'react-redux';

import Header from '../components/Header';
import { addTodo } from '../actions';


const mapDispatchToProps = function(dispatch) {
  return { addTodo : todo => dispatch(addTodo(todo)) };
};

export default connect(null, mapDispatchToProps)(Header);
