import {
  ALL_TASKS_LOADING,
  ALL_TASKS_SUCCESS,
  ALL_TASKS_ERROR,
  TASK_LOADING,
  TASK_SUCCESS,
  TASK_ERROR,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  tasks: null,
  errors: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_TASKS_LOADING: {
      return { ...state, isLoading: true };
    }

    case ALL_TASKS_SUCCESS: {
      return { ...state, isLoading: false, tasks: action.payload };
    }
    case ALL_TASKS_ERROR: {
      state.errors.push(action.payload);
      return { ...state, isLoading: false, tasks: null };
    }

    case TASK_LOADING: {
      return { ...state, isLoading: true };
    }

    case TASK_SUCCESS: {
      return { ...state, isLoading: false, tasks: action.payload };
    }
    
    case TASK_ERROR: {
      state.errors.push(action.payload);
      return { ...state, isLoading: false, tasks: null };
    }

    case CREATE_TASK_LOADING: {
      return { ...state, isLoading: true };
    }

    case CREATE_TASK_SUCCESS: {
      return { ...state, isLoading: false, tasks: action.payload };
    }

    case CREATE_TASK_ERROR: {
      state.errors.push(action.payload);
      return { ...state, isLoading: false, tasks: null };
    }

    default:
      return state;
  }
};