import { combineReducers } from "redux";
import loggedUser from "./loggedUserReducer";
import currentUser from "./currentUserReducer";
import categories from "./categoriesReducer";

export default combineReducers({
  loggedUser,
  currentUser,
  categories,
});
