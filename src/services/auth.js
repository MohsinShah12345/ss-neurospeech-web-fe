import axios from "axios";
import { USERS_BASE_URL } from "../constants/config";
const host = window.location.origin;

const request = axios.create({ baseURL: USERS_BASE_URL }); // makiing axios instance
export const signIn = (data) => {
  return new Promise((resolve, reject) => {
    request
      .post("/user/logIn", data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const signUp = (data) => {
  return new Promise((resolve, reject) => {
    request
      .post("/user/signUp", data)
      .then((res) => {
        resolve(res);
      })
      .then((err) => {
        reject(err);
      });
  });
};
export const signOut = (data) => {
  return new Promise((resolve, reject) => {
    request
      .post("/signOut", data)
      .then((res) => {
        resolve(res);
      })
      .then((err) => {
        reject(err);
      });
  });
};
export const updateUser = (data) => {
  return new Promise((resolve, reject) => {
    request
      .patch("/updateUser", data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    request
      .get(`/user/singleUser/${userId}`, {
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
export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    request
      .get("/user/getAllUsers", {
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
