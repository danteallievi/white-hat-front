import actionTypes from "../actions/actionTypes";

function currentPostReducer(currentPost = {}, action) {
  let newCurrentPost = currentPost;

  switch (action.type) {
    case actionTypes.LOAD_CURRENTPOST:
      newCurrentPost = { ...action.postData };
      break;

    default:
  }

  return newCurrentPost;
}

export default currentPostReducer;
