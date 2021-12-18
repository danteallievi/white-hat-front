import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useStores from "../../hooks/useStores";
import "./PostDetail.scss";

const PostDetail = () => {
  const { loadCurrentPost, currentPost } = useStores();
  const { postId } = useParams();

  useEffect(() => {
    loadCurrentPost(postId);
  }, [loadCurrentPost, postId]);

  return currentPost.title ? (
    <article className="detail-post-card">
      <iframe
        frameBorder={0}
        allowFullScreen
        src={currentPost.videoUrl}
        title={currentPost.title}
        className="detail-post-card__video"
      ></iframe>
      <div className="detail-post-card__info">
        {currentPost.categories.map((category) => (
          <span className="detail-post-card__categories">
            {category.name.toUpperCase()}
          </span>
        ))}
        <h2 className="detail-post-card__title">{currentPost.title}</h2>
        <p className="detail-post-card__description">{currentPost.description}</p>
      </div>
    </article>
  ) : (
    <h1>LOADING</h1>
  );
};

export default PostDetail;
