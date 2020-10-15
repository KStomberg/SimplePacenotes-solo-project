import { combineReducers } from 'redux';

const courseReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COURSE':
            return action.payload;
        default: 
            return state;
    }
};

export default combineReducers({
    courseReducer,
  });
  