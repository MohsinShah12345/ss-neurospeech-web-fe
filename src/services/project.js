import axios from "axios";
import { USERS_BASE_URL } from "../constants/config";
const host = window.location.origin;

const request = axios.create({ baseURL: USERS_BASE_URL });

export const createProjectApi = (data) => {
  return new Promise((resolve, reject) => {
    request
      .post("/voiceOver/createProject", data, {
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem(`${host}_token`)
          )}`,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const getProjectsApi = () => {
  return new Promise((resolve, reject) => {
    request
      .get("/voiceOver/getUserProjects", {
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem(`${host}_token`)
          )}`,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getSingleProjectsApi = (data) => {
  return new Promise((resolve, reject) => {
    request
      .get(`/voiceOver/getSingleProject/${data}`, {
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem(`${host}_token`)
          )}`,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
