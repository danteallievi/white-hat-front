import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUserAction,
  logoutUserAction,
} from "../redux/actions/userActionsCreator";
import {
  createPostThunk,
  loadCurrentPostThunk,
  loadPostsThunk,
} from "../redux/thunks/postsThunks";
import {
  loadUserThunk,
  loginUserThunk,
  loadCategoriesThunk,
} from "../redux/thunks/userThunks";
import queryCreator from "../utils/queryCreator";

const useStores = () => {
  const dispatch = useDispatch();
  const { loggedUser, currentUser, categories, currentPost, posts } =
    useSelector((store) => store);

  const loginUser = useCallback(
    (userData) => {
      dispatch(loginUserThunk(userData));
    },
    [dispatch]
  );

  const logoutUser = () => {
    dispatch(logoutUserAction());
  };

  const loadUser = useCallback(
    (userId) => {
      dispatch(loadUserThunk(userId));
    },
    [dispatch]
  );

  const clearUser = () => {
    dispatch(clearUserAction());
  };

  const loadCurrentPost = useCallback(
    (postId) => {
      dispatch(loadCurrentPostThunk(postId));
    },
    [dispatch]
  );

  const loadCategories = useCallback(() => {
    dispatch(loadCategoriesThunk());
  }, [dispatch]);

  const createPost = (postData) => {
    dispatch(createPostThunk(postData));
  };

  const loadPosts = (queryObject) => {
    const query = queryObject ? queryCreator(queryObject) : "";

    dispatch(loadPostsThunk(query));
  };

  return {
    loggedUser,
    currentUser,
    currentPost,
    categories,
    posts,
    loginUser,
    logoutUser,
    loadUser,
    clearUser,
    loadCurrentPost,
    loadCategories,
    createPost,
    loadPosts,
  };
};

export default useStores;
