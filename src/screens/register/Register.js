import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useInput } from "../../hooks"

import ModalLogin from "../../shared/modalLogin/ModalLogin";
import { Button } from "../../shared/button/Button";
import { Input } from "../../shared/input/Input";

import { register } from "../../actions";

import "./Register.scss";

export const Register = () => {
  
  const username = useInput("", {isEmpty: true, minLength: 4, maxLength: 15});
  const password = useInput("", {isEmpty: true, minLength: 8, maxLength: 20});
  const confirmPassword = useInput("", {isEmpty: true, isEquals: { fieldName: "password", fieldValue: password.value }});
  const email = useInput("", {isEmail: true});
  
  const [formValid, setFormValid] = useState(false);

  // const state = useSelector(state => state.auth.errors)

  // console.log(state, "state.auth.errors");

  const dispatch = useDispatch();

  const handlerOnSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    

    const user = {
      username: username.value,
      password: password.value,
      email: email.value
    }
    dispatch(register(user));

  };

  useEffect(() => {
    const isValid = username.isValid && password.isValid && confirmPassword.isValid && email.isValid
    isValid && setFormValid(isValid)
  }, [username.isValid && password.isValid && confirmPassword.isValid && email.isValid])
  
  return (
    <ModalLogin>
      <div className="register">
        <form className="register__form" onSubmit={handlerOnSubmit} >
          
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

          <Input 
            type="password" 
            name="confirmPassword"
            placeholder="Подтвердите пароль"
            value={confirmPassword.value}
            onChange={confirmPassword.onChange}
            icon="lock"
            errorMsg={confirmPassword.errors[0]}
            required
          />

          <Input 
            type="email" 
            name="email"
            placeholder="Email"
            value={email.value}
            onChange={email.onChange}
            icon="email"
            errorMsg={email.errors[0]}
            required
          />

          <div className={`register__agreement `}>
            <input
              className="register__checkbox"
              type="checkbox"
              required
            />
            <span className="register__agreement-text">Я принимаю условия <Link className="register__link" to="/agreement" >Пользовательского соглашения</Link></span>
          </div>
          

          <Button
            className="register__submit"
            type="submit"
            variant="contained"
            color="secondary"
            disabled={!formValid}
          >
            Зарегистрироваться
          </Button>

        </form>
        <div className="register__bottom">
          <p>
            {"У Вас уже есть аккаунт? "}
            <Link to="/login" className="register__link">
              Войти в систему
            </Link>
          </p>
        </div>
      </div>
    </ModalLogin>
  );
};