import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";

import { mockPosts } from "../../mocks/posts";

import "./Home.scss";

const Home = () => {
  const { posts } = mockPosts;
  return (
    <>
      <Header titleWhite="White" titleBlue="hat" />
      <div className="container">
        <section className="row section-posts">
          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
