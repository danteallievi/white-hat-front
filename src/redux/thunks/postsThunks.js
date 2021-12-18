import axios from "axios";
import {
  createPostAction,
  loadCurrentPostAction,
  loadPostsAction,
} from "../actions/postActionsCreator";

const API_URL = process.env.REACT_APP_API_URL;

export const loadCurrentPostThunk = (postId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API_URL}post/${postId}`);
      dispatch(loadCurrentPostAction(data));
    } catch {
      // TODO error handling
    }
  };
};

export const createPostThunk = (postData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${API_URL}post`, postData);
      console.log(data);
      console.log(dispatch);
      const alg = createPostAction(data);
      console.log(alg);
      dispatch(alg);
    } catch {
      // TODO error handling
    }
  };
};

export const loadPostsThunk = (query) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API_URL}post${query}`);
      console.log(data.data);
      dispatch(loadPostsAction(data.data));
    } catch {
      // TODO error handling
    }
  };
};
