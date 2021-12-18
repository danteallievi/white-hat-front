import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import CreatePostCard from "../../components/CreatePostCard/CreatePostCard";
import PostCard from "../../components/PostCard/PostCard";
import WhButton from "../../components/WhButton/WhButton";
import useStores from "../../hooks/useStores";
import paths from "../../navigation/paths";

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
  return favourite ? (
    <>
      <div>
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
        <div>
          {currentUser.favourites &&
            currentUser.favourites.map((post) => (
              <PostCard {...post} key={post.id} />
            ))}
        </div>
      </div>
    </>
  ) : (
    <>
      <div>
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
        <div>
          <CreatePostCard onClick={() => navigate(paths.createForm)} />
          {currentUser.created &&
            currentUser.created.map((post) => (
              <PostCard {...post} key={post.id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default MySpace;
