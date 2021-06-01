

import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from "../actionTypes";

import { authService } from "../services";
import { addAuthorizationHeader } from "../services/axiosConfig"


export const initialUser = () => async dispatch => {

  const token = localStorage.getItem("token");

  if (token) {
    addAuthorizationHeader()
    try {

      dispatch({ type: LOGIN_LOADING });

      let { data: user } = await authService.account();

      dispatch({ type: LOGIN_SUCCESS, payload: user });

      console.log("after dispatch");

    } catch (e) {
      localStorage.removeItem("token");
      // Надо убрать загрузку или кинуть ошибку и редирекнуть на страницу логина
    }
  }

}

export const register = (user) => async dispatch => {
  try {
    console.log(user);
    let data = await authService.registration(user);
    console.log(data);
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: REGISTER_ERROR, payload: e });
  }
};

export const login = async (username, password) => {
  try {
    const { data: { token, user } } = await authService.login(username, password);
    localStorage.setItem('token', JSON.stringify(token));
    addAuthorizationHeader()
    return { type: LOGIN_SUCCESS, payload: user };
    
  } catch (e) {
    return{ type: LOGIN_ERROR, payload: e };
  }
};

export const logout = () => async dispatch => {
  try {
    await authService.logout();
    localStorage.removeItem('user');
    dispatch({ type: LOGOUT });
  } catch (e) {
    console.log(e);
  }
};
