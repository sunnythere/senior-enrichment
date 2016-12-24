import { combineReducers } from 'redux'
import studentReducer from './studentReducer';
import campusReducer from './campusReducer';



const rootReducer = combineReducers({
      student: studentReducer,
      campus: campusReducer
  });

export default rootReducer
