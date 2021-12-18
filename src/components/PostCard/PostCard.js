import { mockPosts } from "../../mocks/posts";

export const PostCard = () => {
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
    </article>
  );
};
