
import {axiosInstance} from "./axiosConfig"

class UserService{
  url = "/users"

  getUsers() {
    return axiosInstance.get(this.url).then(res => res.json());
  }
}

export const userService = new UserService();;