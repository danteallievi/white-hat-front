import actionTypes from "../actions/actionTypes";

function postsReducer(posts = [], action) {
  let newPosts = posts;

  switch (action.type) {
    case actionTypes.LOAD_POSTS:
      newPosts = [...action.posts];
      break;

    case actionTypes.DELETE_POST:
      newPosts = posts.filter((post) => post.id !== action.postId);
      break;

    default:
  }

  return newPosts;
}

export default postsReducer;
