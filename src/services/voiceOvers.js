import axios from "axios";
import { USERS_BASE_URL } from "../constants/config";
const host = window.location.origin;

const request = axios.create({ baseURL: USERS_BASE_URL });

export const createVoiceOverApi = (data) => {
  return new Promise((resolve, reject) => {
    request
      .post("/voiceOver/createAzureVoiceOver", data, {
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
