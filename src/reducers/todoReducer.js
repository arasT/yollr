import {
  ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO, ACTIVE_ALL_TODO, DONE_ALL_TODO
} from '../constants/action-types';


const initialState = {
  todos : []
};

function todoReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state, todos : [ action.payload.todo, ...state.todos ]
      };
    case DELETE_TODO:
      return {
        ...state, todos : state.todos.filter(todo => todo.id !== action.payload.id)
      }
    case EDIT_TODO:
      return {
        ...state,
        todos : state.todos.map(todo => todo.id === action.payload.id ? {...todo, title : action.payload.title } : todo)
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos : state.todos.map(todo => todo.id === action.payload.id ? { ...todo, done : !todo.done } : todo)
      };
    case ACTIVE_ALL_TODO:
      return {
        ...state, todos : state.todos.map(todo => ({ ...todo, done : false }))
      };
    case DONE_ALL_TODO:
      return {
        ...state, todos : state.todos.map(todo => ({ ...todo, done : true }))
      };
    default:
      return state;
  }
}

  export default todoReducer;
