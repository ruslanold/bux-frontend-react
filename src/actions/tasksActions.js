import {
    ALL_TASKS_LOADING,
    ALL_TASKS_SUCCESS,
    ALL_TASKS_ERROR,
    TASK_LOADING,
    TASK_SUCCESS,
    TASK_ERROR,
} from "../actionTypes";

import { taskService } from "../services";

export const getAllTasks = () => async dispatch => {

    try {
        dispatch({ type: ALL_TASKS_LOADING });
        let { data: tasks } = await taskService.getTasks();
        dispatch({ type: ALL_TASKS_SUCCESS, payload: tasks });
    } catch (e) {
        dispatch({ type: ALL_TASKS_ERROR, payload: e });
    }

}

export const getTask = (id) => async dispatch => {
    try {
        dispatch({ type: TASK_LOADING });
        let { data: task } = await taskService.getTask(id);
        console.log(task);
        dispatch({ type: TASK_SUCCESS, payload: task });
    } catch (e) {
        dispatch({ type: TASK_ERROR, payload: e });
    }
};

export const createTask = (task) => async dispatch => {
    try {
      console.log(task);
      let data = await taskService.createTask(task);
      console.log(data);
      dispatch({ type: REGISTER_SUCCESS, payload: data });
    } catch (e) {
      dispatch(alert.error(e.message));
    }
  };