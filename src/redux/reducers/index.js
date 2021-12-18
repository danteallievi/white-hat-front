import { combineReducers } from "redux";
import loggedUser from "./loggedUserReducer";
import currentUser from "./currentUserReducer";
import currentPost from "./currentPostReducer";

export default combineReducers({
  loggedUser,
  currentUser,
  currentPost,
});
