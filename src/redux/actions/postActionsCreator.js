import actionTypes from "./actionTypes";

export const loadCurrentPostAction = (postData) => ({
  type: actionTypes.LOAD_CURRENTPOST,
  postData,
});

export const loadPostsAction = (posts) => ({
  type: actionTypes.LOAD_POSTS,
  posts,
});
