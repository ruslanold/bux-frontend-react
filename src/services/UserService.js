
import {axiosInstance} from "./axiosConfig"

class UserService{
  url = "/users"

  getUsers() {
    return axiosInstance.get(this.url);
  }

}

export const userService = new UserService();;