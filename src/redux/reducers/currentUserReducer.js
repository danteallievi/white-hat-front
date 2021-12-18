import actionTypes from "../actions/actionTypes";

function currentUserReducer(currentUser = {}, action) {
  let newCurrentUser = currentUser;
  switch (action.type) {
    case actionTypes.LOAD_USER:
      newCurrentUser = { ...action.userData };
      break;
    case actionTypes.CLEAR_USER: {
      newCurrentUser = {};
      break;
    }
    default:
  }

  return newCurrentUser;
}

export default currentUserReducer;
