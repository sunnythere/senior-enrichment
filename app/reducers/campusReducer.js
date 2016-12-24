import {SELECT_CAMPUS, GET_CAMPUSES, DELETED_CAMPUS} from '../actions/campus';


const initialCampusState = {

   selected: {},
   list: [],
   justDeleted: {}
}


export default (state = initialCampusState, action) => {

  const newCampusState = Object.assign({}, state);

  switch (action.type) {

   case SELECT_CAMPUS:
      newCampusState.selected = action.campus;
      break;

   case GET_CAMPUSES:
      newCampusState.list = action.campuses;
      break;

    case DELETED_CAMPUS:
      newCampusState.justDeleted = action.campus;
      break;

   default: return state
  }

  return newCampusState
};

