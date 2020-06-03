import { ADD_COUNTER, GameState } from './Types';
import { combineReducers } from 'redux';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_COUNTER:
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
