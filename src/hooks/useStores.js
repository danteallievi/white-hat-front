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
} from "../redux/thunks/userThunks";

const useStores = () => {
  const dispatch = useDispatch();
  const { loggedUser, currentUser, currentPost } = useSelector(
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

  return {
    loggedUser,
    currentUser,
    currentPost,
    loginUser,
    logoutUser,
    loadUser,
    clearUser,
    loadCurrentPost,
  };
};

export default useStores;
