import { combineReducers } from 'redux';

const pacenoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PACENOTE':
            return action.payload;
        default: 
            return state;
    }
};

export default combineReducers({
    pacenoteReducer,
  });
  