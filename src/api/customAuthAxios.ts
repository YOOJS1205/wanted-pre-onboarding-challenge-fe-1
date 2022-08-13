import axios from "axios";

export const customAuthAxios = axios.create({
  baseURL: "http://localhost:8080/users",
});
