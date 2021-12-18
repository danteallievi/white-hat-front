import actionTypes from "./actionTypes";

export const loginUserAction = (userData) => ({
  type: actionTypes.LOGIN_USER,
  userData,
});

export const logoutUserAction = () => ({
  type: actionTypes.LOGOUT_USER,
});

export const loadUserAction = (userData) => ({
  type: actionTypes.LOAD_USER,
  userData,
});

export const clearUserAction = () => ({
  type: actionTypes.CLEAR_USER,
});

export const loadCategoriesAction = (categories) => ({
  type: actionTypes.LOAD_CATEGORIES,
  categories,
});
