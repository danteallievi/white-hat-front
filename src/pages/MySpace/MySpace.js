import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useStores from "../../hooks/useStores";

const MySpace = () => {
  const { userId } = useParams();
  const { loadUser, currentUser } = useStores();

  useEffect(() => {
    if (userId) {
      loadUser(userId);
    }
  }, [userId, loadUser]);

  console.log(currentUser);

  return <p>MySpace works</p>;
};

export default MySpace;
