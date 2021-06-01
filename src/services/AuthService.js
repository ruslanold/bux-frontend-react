import {axiosInstance} from "./axiosConfig"

class AuthService{
  url = "/users";


  account() {
    return axiosInstance.get(`${this.url}/account`);
  }

  registration(user) {
    console.log("AuthService");
    return axiosInstance.post(this.url, user);
  }

  login(username, password) {
    return axiosInstance.post(`${this.url}/authentication`, {
      username,
      password
    });
  }

  logout() {
    return axiosInstance.post(`${this.url}/logout`);
  }
}

export const authService = new AuthService();