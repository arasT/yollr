import { FILTER_ALL, FILTER_ACTIVE, FILTER_DONE } from '../constants/action-types';
import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from '../constants/filter-types';

const initialState = {
  todoFilter : ALL_TODOS    // ALL, ACTIVE, DONE
};

function filterReducer (state = initialState, action) {
  switch (action.type) {
    case FILTER_ALL:
      return { ...state, todoFilter : ALL_TODOS };
    case FILTER_ACTIVE:
      return { ...state, todoFilter : ACTIVE_TODOS };
    case FILTER_DONE:
      return { ...state, todoFilter : DONE_TODOS };
    default:
      return state;
  }
}

export default filterReducer;
