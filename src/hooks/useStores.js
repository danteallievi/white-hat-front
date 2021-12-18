import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../redux/actions/userActionsCreator";
import { loginUserThunk } from "../redux/thunks/userThunks";

const useStores = () => {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector((store) => store);

  const loginUser = useCallback(
    (userData) => {
      dispatch(loginUserThunk(userData));
    },
    [dispatch]
  );

  const logoutUser = () => {
    dispatch(logoutUserAction());
  };

  return {
    loggedUser,
    loginUser,
    logoutUser,
  };
};

export default useStores;
