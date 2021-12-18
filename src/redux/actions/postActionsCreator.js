import actionTypes from "./actionTypes";

export const loadCurrentPostAction = (postData) => ({
  type: actionTypes.LOAD_CURRENTPOST,
  postData,
});

export const createPostAction = (postData) => ({
  type: actionTypes.CREATE_POST,
  postData,
});
