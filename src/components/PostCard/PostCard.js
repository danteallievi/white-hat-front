import { ReactComponent as IconDelete } from "../../assets/icono-delete.svg";
import { ReactComponent as IconFavorite } from "../../assets/icono-favorite.svg";

import "./PostCard.scss";

const PostCard = ({ post }) => {
  return (
    <article className="post-card">
      <iframe
        frameBorder={0}
        allowFullScreen
        src={post.videoUrl}
        title={post.title}
        className="post-card__video"
      ></iframe>
      <div className="post-card__title-container">
        <h2 className="post-card__title">{post.title}</h2>
        <div className="buttons-container">
          <button className="button-delete">
            <IconDelete
              width="30"
              height="30"
              className="button-delete__icon"
            />
          </button>
          <button className="button-favourite">
            <IconFavorite
              width="30"
              height="30"
              className="button-favourite__icon"
            />
          </button>
        </div>
      </div>

      <p className="post-card__description">{post.description}</p>
      {post.categories.length ? (
        <div className="post-card__categories-containter">
          <span className="post-card__categories">
            {post.categories[0].name.toUpperCase()}
          </span>
          <span className="post-card__categories">
            {post.categories[1].name.toUpperCase()}
          </span>
        </div>
      ) : (
        ""
      )}
    </article>
  );
};

export default PostCard;
