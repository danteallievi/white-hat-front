import axios from "axios";

import {
  loadCategoriesAction,
  loadUserAction,
  loginUserAction,
} from "../actions/userActionsCreator";

const API_URL = process.env.REACT_APP_API_URL;

export const loginUserThunk = (userData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${API_URL}user`, userData);
      dispatch(loginUserAction(data));
    } catch {
      // TODO error handling
    }
  };
};

export const loadUserThunk = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API_URL}user/${userId}`);
      dispatch(loadUserAction(data));
    } catch {
      // TODO error handling
    }
  };
};

export const loadCategoriesThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API_URL}category`);
      console.log(dispatch);
      dispatch(loadCategoriesAction(data));
    } catch {
      // TODO error handling
    }
  };
};
