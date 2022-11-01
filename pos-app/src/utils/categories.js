import axios from "axios";
const getCategories = async () => {
  const { data } = await axios.get("http://127.0.0.1:3000/categories/");
  return data
};

export default getCategories;
