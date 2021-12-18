import { mockPosts } from "../../mocks/posts";
import { ReactComponent as IconDelete } from "../../assets/icono-delete.svg";
import { ReactComponent as IconFavorite } from "../../assets/icono-favorite.svg";

const PostCard = () => {
  const { posts } = mockPosts;
  return (
    <article>
      <iframe
        width="560"
        height="315"
        src={posts[0].videoUrl}
        title={posts[0].title}
      ></iframe>
      <h2>{posts[0].title}</h2>
      <p>{posts[0].description}</p>
      {posts[0].categories.length ? (
        <>
          <span>{posts[0].categories[0]}</span>
          <span>{posts[0].categories[1]}</span>
        </>
      ) : (
        ""
      )}
      <button>
        <IconDelete width="30" height="30" />
      </button>
      <button>
        <IconFavorite width="30" height="30" />
      </button>
    </article>
  );
};

export default PostCard;
