import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import CreatePostCard from "../../components/CreatePostCard/CreatePostCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";
import WhButton from "../../components/WhButton/WhButton";
import useStores from "../../hooks/useStores";
import paths from "../../navigation/paths";
import "./MySpace.scss";

const MySpace = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { loadUser, currentUser } = useStores();
  const [favourite, setFavourite] = useState(true);

  useEffect(() => {
    if (userId) {
      loadUser(userId);
    }
  }, [userId, loadUser]);

  return (
    <>
      <Header titleWhite="Mi" titleBlue="espacio" />
      <div className="container">
        <div className="button-container">
          <WhButton
            type="primary"
            text="favourites"
            onClick={() => setFavourite(true)}
          />
          <WhButton
            type="primary"
            text="posts"
            onClick={() => setFavourite(false)}
          />
        </div>
        {favourite ? (
          <section className="row section-posts">
            {currentUser.favourites &&
              currentUser.favourites.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
          </section>
        ) : (
          <section className="row section-posts">
            <CreatePostCard onClick={() => navigate(paths.createForm)} />
            {currentUser.created &&
              currentUser.created.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MySpace;
