import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUserAction,
  logoutUserAction,
} from "../redux/actions/userActionsCreator";
import {
  loadCategoriesThunk,
  loadUserThunk,
  loginUserThunk,
} from "../redux/thunks/userThunks";

const useStores = () => {
  const dispatch = useDispatch();
  const { loggedUser, currentUser, categories } = useSelector((store) => store);

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

  const loadCategories = useCallback(() => {
    dispatch(loadCategoriesThunk());
  }, [dispatch]);

  return {
    loggedUser,
    currentUser,
    categories,
    loginUser,
    logoutUser,
    loadUser,
    clearUser,
    loadCategories,
  };
};

export default useStores;
