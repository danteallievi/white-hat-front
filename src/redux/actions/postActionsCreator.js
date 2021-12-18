import actionTypes from "./actionTypes";

export const loadCurrentPostAction = (postData) => ({
  type: actionTypes.LOAD_CURRENTPOST,
  postData,
});
