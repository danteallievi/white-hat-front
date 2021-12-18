import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const createPostApi = async (postData) => {
  try {
    const { data } = await axios.post(`${API_URL}post`, postData);

    if (data) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};
