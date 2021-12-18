import { ReactComponent as IconCreate } from "../../assets/icono-create.svg";

import "./CreatePostCard.scss";

const CreatePostCard = ({ onClick }) => {
  return (
    <article className="create-post-card">
      <button className="button-create">
        <IconCreate
          width="80"
          height="80"
          className="button-create__icon"
          onClick={onClick}
        />
      </button>
    </article>
  );
};

export default CreatePostCard;
