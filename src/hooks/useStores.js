import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUserAction,
  logoutUserAction,
} from "../redux/actions/userActionsCreator";
import {
  createPostThunk,
  loadCurrentPostThunk,
} from "../redux/thunks/postsThunks";
import {
  loadUserThunk,
  loginUserThunk,
  loadCategoriesThunk,
} from "../redux/thunks/userThunks";

const useStores = () => {
  const dispatch = useDispatch();
  const { loggedUser, currentUser, categories, currentPost } = useSelector(
    (store) => store
  );

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

  return {
    loggedUser,
    currentUser,
    currentPost,
    categories,
    loginUser,
    logoutUser,
    loadUser,
    clearUser,
    loadCurrentPost,
    loadCategories,
    createPost,
  };
};

export default useStores;
