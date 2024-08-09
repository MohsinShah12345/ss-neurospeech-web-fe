import axios from "axios";
import { apiWrapper } from "./interceptors";
import { USERS_BASE_URL } from "../constants/config";

const request = axios.create({ baseURL: USERS_BASE_URL }); // makiing axios instance
const posts = {
  getPost: (data) => request.get(`/posts/${data}`),
  getMany: (data) => request.get("/posts", data),
  addPost: (data) =>
    request.post("/posts", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  addManyPosts: (data) =>
    request.post("/posts/manyMosts", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  updatePost: (data) =>
    request.patch(`/posts/${data}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  deletePost: (data) => request.delete(`/posts/${data}`),
  deleteMany: (data) => request.delete("/posts/deleteMany", data),
};
export default apiWrapper(posts);
