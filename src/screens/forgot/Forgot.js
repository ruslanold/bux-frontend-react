import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useInput } from "../../hooks"

import ModalLogin from "../../shared/modalLogin/ModalLogin";
import { Button } from "../../shared/button/Button";
import { Input } from "../../shared/input/Input";

import { forgotPassword } from "../../actions";

import "./Forgot.scss";

export const Forgot = () => {
  const email = useInput("", { isEmail: true });
  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch(forgotPassword(email.value));
  };

  useEffect(() => {
    email.isValid && setFormValid(true);
  }, [email.isValid]);

  return (
    <ModalLogin>
      <div className="forgot">
        <form className="forgot__form" onSubmit={handleForm}>
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

          <Button
            className="forgot__submit"
            type="submit"
            variant="contained"
            color="secondary"
            disabled={!formValid}
          >
            Отправить мне инструкции
          </Button>
        </form>
      </div>
    </ModalLogin>
  );
};
