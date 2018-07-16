import { combineReducers } from 'redux';

import ImageReducer from "./ImageReducer";


/* Combines all the reducer to single reducer */
const Reducer = combineReducers({
  ImageReducer
});
export default Reducer;