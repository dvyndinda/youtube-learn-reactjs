import axios from "axios";

export const getProduct = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => callback(response.data))
    .catch((err) => console.log(err));
};
