import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { useInput } from "../../hooks"

import { login } from "../../actions";

import { Button } from "../../shared/button/Button";
import ModalLogin from "../../shared/modalLogin/ModalLogin";
import { Input } from "../../shared/input/Input";


import "./Login.scss";

export const Login = () => {
  const username = useInput("", {isEmpty: true, minLength: 4, maxLength: 15});
  const password = useInput("", {isEmpty: true, minLength: 8, maxLength: 20});

  const [formValid, setFormValid] = useState(false);


  const isAuth = useSelector( state => state.auth.isAuth)
  const dispatch = useDispatch();


  const handleForm = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (username.isValid && password.isValid) {      
      dispatch(login(username.value, password.value))
    }

  };

  useEffect(() => {
    const isValid = username.isValid && password.isValid
    isValid && setFormValid(isValid)
  }, [username.isValid && password.isValid])


  if (isAuth) {
    return <Redirect to={'/account'}/>
  }

  return (
    <ModalLogin>
      {console.log("render Login component")}
      <div className="login">
        <form className="login__form" onSubmit={handleForm}>
          <Input 
            type="text" 
            name="username"
            placeholder="Имя пользователя"
            value={username.value}
            onChange={username.onChange}
            icon="person"
            errorMsg={username.errors[0]}
            required
          /> 
          <Input 
            type="password" 
            name="password"
            placeholder="Пароль"
            value={password.value}
            onChange={password.onChange}
            icon="lock"
            errorMsg={password.errors[0]}
            required
          /> 
          <Button
            className="login__submit"
            type="submit"
            variant="contained"
            color="secondary"
            disabled={!formValid}
          >
            Войти
          </Button>
          <div className="login__forgot">
            <Link to="/forgot" className="login__link">Забыли пароль?</Link>
          </div>
        </form>

        <div className="login__bottom">
          <p>
            {"У Вас ещё нет аккаунта? "}
            <Link to="/register" className="login__link">Зарегистрироваться</Link>
          </p>
        </div>
      </div>
    </ModalLogin>
  );
};
