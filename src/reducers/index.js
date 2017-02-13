import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// Import all my reducer path

const rootReducer = combineReducers({
// This is where all reducer will be handle
 routing: routerReducer,
});

export default rootReducer;
