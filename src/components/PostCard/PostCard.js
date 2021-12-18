import { mockPosts } from "../../mocks/posts";
import { ReactComponent as IconDelete } from "../../assets/icono-delete.svg";
import { ReactComponent as IconFavorite } from "../../assets/icono-favorite.svg";

import "./PostCard.scss";

const PostCard = () => {
  const { posts } = mockPosts;
  return (
    <article className="post-card">
      <iframe
        src={posts[0].videoUrl}
        title={posts[0].title}
        className="post-card__video"
      ></iframe>
      <div className="post-card__title-container">
        <h2 className="post-card__title">{posts[0].title}</h2>
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

      <p className="post-card__description">{posts[0].description}</p>
      {posts[0].categories.length ? (
        <div className="post-card__categories-containter">
          <span className="post-card__categories">
            {posts[0].categories[0].toUpperCase()}
          </span>
          <span className="post-card__categories">
            {posts[0].categories[1].toUpperCase()}
          </span>
        </div>
      ) : (
        ""
      )}
    </article>
  );
};

export default PostCard;
