import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import ModalLogin from "../../shared/modalLogin/ModalLogin";
import Button from "../../shared/button/Button";

import { register } from "../../actions";

import "./Register.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [usernameValid, setUsernameValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);

  const [formValid, setFormValid] = useState(false);

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  })

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const formErrors = {}

    formErrors.username = usernameValid ? "" : "Имя пользователя должно быть от 4 до 15 символов";
    formErrors.password = passwordValid ? "" : "Пароль должен быть от 8 до 20 символов";
    formErrors.confirmPassword = confirmPasswordValid ? "" : "Пароли не совпадают";
    formErrors.email = emailValid ? "" : "Введите корректный email";

    console.log(errors, "errors");
    console.log(formErrors, "formErrors");

    
    
    const isErrors = Object.values(formErrors).some(el => el.length > 0)
    if (isErrors) return setErrors({ ...errors, ...formErrors });
    
    const user = {
      username,
      password,
      email
    }
    console.log(" dispatch(register(user))");
    dispatch(register(user));

  };

  const validateInput = (e) => {
    const { target: { name } } = e
    if (name === "username") setUsernameValid(usernameValidator());
    if (name === "password") setPasswordValid(passwordValidator());
    if (name === "confirmPassword") setConfirmPasswordValid(confirmPasswordValidator());
    if (name === "email") setEmailValid(emailValidator());

    validateForm()
  }
  
  const validateForm = () => {
    setFormValid(username.length && password.length && confirmPassword.length && email.length);
  }
  
  const usernameValidator = () => {
    return /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){4,15}[a-zA-Z0-9]$/.test(username);
  }

  const passwordValidator = () => {
    return /^\S{8,20}$/.test(password)
  };

  const confirmPasswordValidator = () => {
    return passwordValid && password === confirmPassword
  };

  const emailValidator = () => {
    console.log( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email), "emailValidator");
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  const showIcon = (inputValue, inputValid) => {
    // return (
    //   inputValue.length > 0 && inputValid !== null && (inputValid ?
    //       <span className="register__icon register__icon--valid material-icons md-18">check</span> :
    //       <span className="register__icon register__icon--invalid material-icons md-18">cancel</span>)
    // )
    if (inputValid === null) return ""

    return inputValid
        ? "register__item-wrrap--valid"
        : "register__item-wrrap--invalid"
    
  }


  return (
    <ModalLogin>
      <div className="register">
        <form className="register__form" onSubmit={handleForm} >
          <div className={`register__item-wrrap ${showIcon(username,usernameValid)}`}>
            <span className="register__icon material-icons md-18">person</span>
            <input
              className="register__item"
              type="text"
              name="username"
              placeholder="Имя пользователя"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
              onBlur={validateInput}
              required
            />
            {/* {showIcon(username,usernameValid)} */}
          </div>
          <div className={`register__item-wrrap ${showIcon(password,passwordValid)}`}>
            <span className="register__icon material-icons md-18">lock</span>
            <input
              className="register__item"
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              onBlur={validateInput}
              required
            />
            {/* {showIcon(password, passwordValid)} */}
          </div>

          <div className={`register__item-wrrap ${showIcon(confirmPassword,confirmPasswordValid)}`}>
            <span className="register__icon material-icons md-18">lock</span>
            <input
              className="register__item"
              type="password"
              name="confirmPassword"
              placeholder="Подтвердите пароль"
              value={confirmPassword}
              onInput={(e) => setConfirmPassword(e.target.value)}
              onBlur={validateInput}
              required
            />
            {/* {showIcon(confirmPassword, confirmPasswordValid)} */}
          </div>

          <div className={`register__item-wrrap ${showIcon(email,emailValid)}`}>
            <span className="register__icon material-icons md-18">email</span>
            <input
              className="register__item"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateInput}
              required
            />
            {/* {showIcon(email, emailValid)} */}
          </div>
          <div className={`register__agreement ${showIcon(email,emailValid)}`}>
            <input
              className="register__checkbox"
              type="checkbox"
              required
            />
            <span className="register__agreement-text">Я принимаю условия <Link className="register__link" to="/agreement" >Пользовательского соглашения</Link></span>
            {/* {showIcon(email, emailValid)} */}
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
          {console.log(Object.values(errors).find(err => err.length > 0), "return error")}
          {
            <div className="error-alert">{ Object.values(errors).find(err => err.length > 0) }</div>
          }

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

export default Register;
