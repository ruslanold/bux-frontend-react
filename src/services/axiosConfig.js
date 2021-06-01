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