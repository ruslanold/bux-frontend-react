import {axiosInstance} from "./axiosConfig"

class TaskService{
  url = "/tasks"

  getTasks() {
    return axiosInstance.get(this.url).then(res => res.json());
  }
}

export const taskService = new TaskService();;