import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3030",
});

export const addAuthorizationHeader = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  if (!error.response) {
    return Promise.reject(error);
  }
  return Promise.reject(error.response.data);
});

