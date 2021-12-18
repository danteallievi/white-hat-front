import actionTypes from "../actions/actionTypes";

function currentUserReducer(currentUser = {}, action) {
  let newCurrentUser = currentUser;
  console.log("AAAAAA");
  switch (action.type) {
    case actionTypes.LOAD_USER:
      newCurrentUser = { ...action.userData };
      break;
    case actionTypes.CLEAR_USER: {
      newCurrentUser = {};
      break;
    }
    case actionTypes.CREATE_POST:
      newCurrentUser = {
        ...newCurrentUser,
        created: [...newCurrentUser.created, action.postData],
      };
      console.log({ newCurrentUser });
      break;
    default:
  }

  return newCurrentUser;
}

export default currentUserReducer;
