import axios from "axios";
import {
  loadCurrentPostAction,
  loadPostsAction,
  deletePostsAction,
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

export const loadPostsThunk = (query) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API_URL}post${query}`);
      dispatch(loadPostsAction(data.data));
    } catch {
      // TODO error handling
    }
  };
};

export const deletePostThunk = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${API_URL}post/${id}`);

    if (response.status === 200) {
      dispatch(deletePostsAction(id));
    }
  } catch (error) {}
};
