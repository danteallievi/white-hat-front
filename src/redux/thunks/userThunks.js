import axios from "axios";
import { loginUserAction } from "../actions/userActionsCreator";

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
