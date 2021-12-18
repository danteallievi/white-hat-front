import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUserAction,
  logoutUserAction,
} from "../redux/actions/userActionsCreator";
import {
  loadUserThunk,
  loginUserThunk,
  loadCurrentPostThunk,
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
  };
};

export default useStores;
