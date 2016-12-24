import {SELECT_STUDENT, GET_STUDENTS} from '../actions/student';

const initialStudentState = {
   selected: {},
   list: [],
}


export default (state = initialStudentState, action) => {

  const newStudentState = Object.assign({}, state);

  switch(action.type) {

   case SELECT_STUDENT:
      newStudentState.selected = action.student;
      break;

   case GET_STUDENTS:
      newStudentState.list = action.students;
      console.log('reducing')
      break;

   default: return state
  }

  return newStudentState
};
