import { useNavigate } from "react-router-dom";
import paths from "../../navigation/paths";
import { ReactComponent as IconDelete } from "../../assets/icono-delete.svg";
import { ReactComponent as IconFavorite } from "../../assets/icono-favorite.svg";

import "./PostCard.scss";
import useStores from "../../hooks/useStores";

const PostCard = ({ post }) => {
  const { deletePost } = useStores();
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    navigate(`${paths.postDetail}/${post.id}`);
  };

  const handleDeleteClick = (id) => {
    deletePost(id);
  };

  return (
    <article className="post-card col-4">
      <iframe
        src={post.videoUrl}
        title={post.title}
        className="post-card__video"
      ></iframe>
      <div className="post-card__title-container">
        <h2 className="post-card__title">{post.title}</h2>
        <div className="buttons-container">
          <button
            className="button-delete"
            onClick={() => handleDeleteClick(post.id)}
          >
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
        {post.categories.map((category, index) => (
          <span key={`${post.id}-${index}`} className="post-card__categories">
            {category?.name?.toUpperCase()}
          </span>
        ))}
      </div>
      <p onClick={handleCardClick} className="post-card__verMas">
        Ver más
      </p>
    </article>
  );
};

export default PostCard;
