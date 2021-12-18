import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUserAction,
  logoutUserAction,
} from "../redux/actions/userActionsCreator";
import { loadUserThunk, loginUserThunk } from "../redux/thunks/userThunks";

const useStores = () => {
  const dispatch = useDispatch();
  const { loggedUser, currentUser } = useSelector((store) => store);

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

  return {
    loggedUser,
    currentUser,
    loginUser,
    logoutUser,
    loadUser,
    clearUser,
  };
};

export default useStores;
