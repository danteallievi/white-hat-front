import { useParams } from "react-router-dom";

const MySpace = () => {
  const { userId } = useParams();

  console.log(userId);

  return <p>MySpace works</p>;
};

export default MySpace;
