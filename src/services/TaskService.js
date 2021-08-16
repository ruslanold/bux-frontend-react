import { axiosInstance } from "./axiosConfig"

class TaskService {
    url = "/tasks"

    getTasks() {
        return axiosInstance.get(this.url);
    }
    getTask(id) {
        // Number(id) ? true : false
        return axiosInstance.get(this.url + id);
    }
    createTask(task) {
        return axiosInstance.post(this.url, task);
    }
}

export const taskService = new TaskService();;