import {axiosInstance} from "./axiosConfig"

class AuthService{
  url = "/users";


  account() {
    return axiosInstance.get(`${this.url}/account`);
  }

  registration(user) {
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

  forgotPassword(email){
    return axiosInstance.post(`${this.url}/reset/password`, { 
      email 
    });
  }

  checkIsValidPasswordResetToken(code) {
    return axiosInstance.get(`${this.url}/reset/password?code=${code}`);
  }

}

export const authService = new AuthService();