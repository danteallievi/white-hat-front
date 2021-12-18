import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useStores from "../../hooks/useStores";

const PostDetail = () => {
  const { loadCurrentPost, currentPost } = useStores();
  const { postId } = useParams();

  useEffect(() => {
    loadCurrentPost(postId);
  }, [loadCurrentPost, postId]);

  console.log(currentPost);

  return <p>PostDetail works</p>;
};

export default PostDetail;
