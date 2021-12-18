import actionTypes from "../actions/actionTypes";

function categoriesReducer(categories = [], action) {
  let newCategories = categories;

  switch (action.type) {
    case actionTypes.LOAD_CATEGORIES:
      newCategories = [...action.categories];
      break;
    default:
  }

  return newCategories;
}

export default categoriesReducer;
