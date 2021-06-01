import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

import Button from "../../shared/button/Button";
import ModalLogin from "../../shared/modalLogin/ModalLogin";

import { login } from "../../actions";

import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const handleForm = async (e) => {
    e.preventDefault();

    if (username && password) {
      const data = await login(username, password);
      dispatch(data);
      history.push("/account");
    }
  };

  // const goAccount = () => {
  //   console.log("goAccount");
  //   history.push("/account")
  // }

  return (
    <ModalLogin>
      <div className="login">
        <form className="login__form" onSubmit={handleForm}>
          <div className="login__item-wrrap">
            <span className="login__icon material-icons md-18">person</span>
            <input
              className="login__item"
              type="text"
              name="username"
              placeholder="Имя пользователя"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="login__item-wrrap">
            <span className="login__icon material-icons md-18">lock</span>
            <input
              className="login__item"
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button
            className="login__submit"
            type="submit"
            variant="contained"
            color="secondary"
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

export default Login;
