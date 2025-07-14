import axios from "axios";
import { jwtDecode } from 'jwt-decode';

export const postLogin = (credentials, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", credentials)
    .then((response) => callback(true, response.data.token))
    .catch((err) => callback(false, err));
};

export const getUsername = (token) => {
    const decode = jwtDecode(token);
    console.log(decode);
    return decode.user;
}