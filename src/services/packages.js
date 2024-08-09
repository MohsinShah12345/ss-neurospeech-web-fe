import axios from "axios";
import { USERS_BASE_URL } from "../constants/config";
const host = window.location.origin;

const request = axios.create({ baseURL: USERS_BASE_URL });

export const getPackagesApi = () => {
  return new Promise((resolve, reject) => {
    request
      .get("/package/getNeuroSpeechPackages", {
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

export const getSinglePackageApi = (packageId) => {
  return new Promise((resolve, reject) => {
    request
      .get(`/package/getSingleNeuroSpeechPackage/${packageId}`, {
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

export const getPackageSubsciptionsApi = ({ packageId, pageNo }) => {
  console.log(pageNo, "Package Subsciptions API payload: ", packageId);
  return new Promise((resolve, reject) => {
    request
      .get(
        `/package/getSingleNeuroSpeechPackageSubscribedBy/${packageId}/${pageNo}`,
        {
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem(`${host}_token`)
            )}`,
          },
        }
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const addPackagesApi = (data) => {
  return new Promise((resolve, reject) => {
    request
      .post("/package/addNeuroSpeechPackage", data, {
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

export const updatePackageApi = (data) => {
  return new Promise((resolve, reject) => {
    request
      .patch("/package/updateNeuroSpeechPackage", data, {
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

export const deletePackageApi = (id) => {
  return new Promise((resolve, reject) => {
    request
      .delete(`/package/deleteNeuroSpeechPackage/${id}`, {
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
