import { ReactComponent as ImageAmbient } from "../../assets/image_ambient.svg";
import Footer from "../../components/Footer/Footer";
import PostCard from "../../components/PostCard/PostCard";

import { mockPosts } from "../../mocks/posts";

import "./Home.scss";

const Home = () => {
  const { posts } = mockPosts;
  return (
    <>
      <header className="header-main">
        <ImageAmbient className="header-main__image" />
        <h1 className="header-main__title">Home</h1>
      </header>
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
