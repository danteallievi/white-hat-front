import actionTypes from "../actions/actionTypes";

function postsReducer(posts = [], action) {
  let newPosts = posts;

  switch (action.type) {
    case actionTypes.LOAD_POSTS:
      newPosts = [...action.posts];
      break;
    default:
  }

  return newPosts;
}

export default postsReducer;
