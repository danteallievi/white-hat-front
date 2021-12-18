import { useNavigate } from "react-router-dom";
import paths from "../../navigation/paths";
import { ReactComponent as IconDelete } from "../../assets/icono-delete.svg";
import { ReactComponent as IconFavorite } from "../../assets/icono-favorite.svg";

import "./PostCard.scss";

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`${paths.postDetail}/${post.id}`);
  };

  return (
    <article className="post-card col-4" onClick={handleCardClick}>
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
      <div className="post-card__categories-containter">
        {post.categories.map((category) => (
          <span className="post-card__categories">
            {category.name.toUpperCase()}
          </span>
        ))}
      </div>
    </article>
  );
};

export default PostCard;
