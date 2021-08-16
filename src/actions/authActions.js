

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

import * as alert from "./alertActions";


export const initialUser = () => async dispatch => {

  const token = localStorage.getItem("token");

  if (token) {
    addAuthorizationHeader()
    try {

      dispatch({ type: LOGIN_LOADING });

      let { data: user } = await authService.account();

      dispatch({ type: LOGIN_SUCCESS, payload: user });

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
    dispatch(alert.error(e.message));
    //dispatch({ type: REGISTER_ERROR, payload: e });
  }
};

export const login = (username, password) => async dispatch => {
  try {
    
    const res = await authService.login(username, password);
    
    const { data, data: { token, user } } = res

    console.log(res, data);

    localStorage.setItem('token', JSON.stringify(token));
    
    addAuthorizationHeader()
    
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (e) {
    dispatch(alert.error(e.message));
    //dispatch({ type: LOGIN_ERROR, payload: { message: e.message} });
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

export const forgotPassword = (email) => async dispatch => {
  try {
    const data = await authService.forgotPassword(email);
    console.log(data);
    dispatch(alert.success("We sent instructions to email"));
  } catch (e) {
    dispatch(alert.error(e.message));
  }
}

export const checkIsValidPasswordResetToken = async code => {
  try {
    const data = await authService.checkIsValidPasswordResetToken(code);
    console.log(data, "checkIsValidPasswordResetToken");

  } catch (e) {
    console.log(e);
  }
}
