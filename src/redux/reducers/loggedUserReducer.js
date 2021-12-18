import actionTypes from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  userData: {},
};

function loggedUserReducer(loggedUser = initialState, action) {
  let newLoggedUser = loggedUser;

  switch (action.type) {
    case actionTypes.LOGIN_USER:
      newLoggedUser = {
        isAuthenticated: true,
        userData: { ...action.userData },
      };
      break;
    case actionTypes.LOGOUT_USER:
      newLoggedUser = initialState;
      break;
    default:
  }

  return newLoggedUser;
}

export default loggedUserReducer;
