import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import filterReducer from './filterReducer';


const appReducer = combineReducers ({
  todosList : todoReducer,
  todosFilter : filterReducer
});

export default appReducer;
