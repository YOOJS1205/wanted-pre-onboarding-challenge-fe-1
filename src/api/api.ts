import axios from "axios";
import { getCookieToken } from "../util/cookie";

const token = getCookieToken();

// 로그인, 회원가입 API
export const authAPI = axios.create({
  baseURL: "http://localhost:8080/users",
});

// 게시물 CRUD API
export const todoAPI = axios.create({
  baseURL: "http://localhost:8080/todos",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
