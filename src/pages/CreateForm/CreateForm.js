import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import WhButton from "../../components/WhButton/WhButton";
import useStores from "../../hooks/useStores";
import paths from "../../navigation/paths";

import "./CreateForm.scss";

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
      <Header titleWhite="Crear" titleBlue="post" />
      <div className="container">
        <form className="form-create-post row">
          <div className="col-4 row">
            <input
              type="text"
              name="title"
              placeholder="Título"
              value={postData.title}
              onChange={onChangeForm}
              className="form-create-post__input-title col-12"
            />
            <select
              name="categories"
              value={postData.categories}
              onChange={onChangeForm}
              className="form-create-post__input-categories col-12"
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
              placeholder="URL del vídeo"
              value={postData.videoUrl}
              onChange={onChangeForm}
              className="form-create-post__input-url col-12"
            />
          </div>
          <div className="col-8 row">
            <textarea
              name="description"
              value={postData.description}
              placeholder="Descripción"
              onChange={onChangeForm}
              className="form-create-post__input-description col-12"
            />
          </div>

          <div className="form-create-post__buttons">
            <WhButton text="Cancelar" type="cancel" onClick={cancelCreation} />
            <WhButton
              text="Crear Post"
              type="primary"
              onClick={handleCreatePost}
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateForm;
