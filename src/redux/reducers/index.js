import { combineReducers } from "redux";
import loggedUser from "./loggedUserReducer";
import currentUser from "./currentUserReducer";

export default combineReducers({
  loggedUser,
  currentUser,
});
