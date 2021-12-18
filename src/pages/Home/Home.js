import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";

import useStores from "../../hooks/useStores";

import "./Home.scss";

const Home = () => {
  const { posts, loadPosts } = useStores();

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <>
      <Header />
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
