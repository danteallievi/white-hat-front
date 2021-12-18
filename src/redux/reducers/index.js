import { combineReducers } from "redux";
import loggedUser from "./loggedUserReducer";
import currentUser from "./currentUserReducer";
import currentPost from "./currentPostReducer";
import categories from "./categoriesReducer";

export default combineReducers({
  loggedUser,
  currentUser,
  currentPost,
  categories,
});
