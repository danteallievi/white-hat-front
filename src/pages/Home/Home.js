import { ReactComponent as ImageAmbient } from "../../assets/image_ambient.svg";
import PostCard from "../../components/PostCard/PostCard";

import { mockPosts } from "../../mocks/posts";

const Home = () => {
  const { posts } = mockPosts;
  return (
    <>
      <header>
        <ImageAmbient />
        <h1>Titulo 1</h1>
      </header>

      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  );
};

export default Home;
