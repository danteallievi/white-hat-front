import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WhButton from "../../components/WhButton/WhButton";
import useStores from "../../hooks/useStores";
import paths from "../../navigation/paths";

const CreateForm = () => {
  const navigate = useNavigate();
  const { loggedUser, categories, loadCategories, createPost } = useStores();
  const [postData, setPostData] = useState({
    title: "",
    categories: "",
    videoUrl: "",
    description: "",
  });

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const cancelCreation = () => {
    if (loggedUser.userData?.id) {
      return navigate(`${paths.mySpace}/${loggedUser.userData.id}`);
    }
    return navigate(paths.home);
  };

  const handleCreatePost = async (event) => {
    event.preventDefault();

    if (
      postData.title &&
      postData.categories &&
      postData.description &&
      postData.videoUrl &&
      loggedUser.userData?.id
    ) {
      const result = await createPost({
        ...postData,
        creator: loggedUser.userData.id,
      });

      if (result) {
        return cancelCreation();
      }
      //TODO error handling
    }
  };

  const onChangeForm = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={onChangeForm}
        />
        <select
          name="categories"
          value={postData.categories}
          onChange={onChangeForm}
        >
          <option disabled>Select a category</option>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="videoUrl"
          value={postData.videoUrl}
          onChange={onChangeForm}
        />
        <textarea
          name="description"
          value={postData.description}
          onChange={onChangeForm}
        />
        <WhButton text="Cancelar" type="cancel" onClick={cancelCreation} />
        <WhButton text="Crear Post" type="primary" onClick={handleCreatePost} />
      </form>
    </>
  );
};

export default CreateForm;
