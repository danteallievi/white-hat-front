import { ReactComponent as IconDelete } from "../../assets/icono-delete.svg";
import { ReactComponent as IconFavorite } from "../../assets/icono-favorite.svg";

import "./PostCard.scss";

const PostCard = ({ videoUrl, title, description, categories }) => {
  return (
    <article className="post-card col-4">
      <iframe
        src={videoUrl}
        title={title}
        className="post-card__video"
      ></iframe>
      <div className="post-card__title-container">
        <h2 className="post-card__title">{title}</h2>
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
      <p className="post-card__description">{description}</p>
      <div className="post-card__categories-containter">
        {categories.map((category) => (
          <span className="post-card__categories">
            {category.name.toUpperCase()}
          </span>
        ))}
      </div>
    </article>
  );
};

export default PostCard;
