import actionTypes from "./actionTypes";

export const loadCurrentPostAction = (postData) => ({
  type: actionTypes.LOAD_CURRENTPOST,
  postData,
});

export const loadPostsAction = (posts) => ({
  type: actionTypes.LOAD_POSTS,
  posts,
});

export const deletePostsAction = (postId) => ({
  type: actionTypes.DELETE_POST,
  postId,
});
