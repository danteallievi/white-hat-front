import { useSelector } from "react-redux";

const useStores = () => {
  const { test } = useSelector((store) => store);

  return {
    test,
  };
};

export default useStores;
