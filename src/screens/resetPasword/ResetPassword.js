import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useInput } from "../../hooks"

import { Button } from "../../shared/button/Button";
import { Input } from "../../shared/input/Input";

import { checkIsValidPasswordResetToken } from "../../actions";

import "./ResetPassword.scss";

export const ResetPassword = () => {

  const password = useInput("", {isEmpty: true, minLength: 8, maxLength: 20});
  const confirmPassword = useInput("", {isEmpty: true, isEquals: { fieldName: "password", fieldValue: password.value }});

  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();

  const query = new URLSearchParams(useLocation().search);
  const code = query.get("code")


  useEffect(() => {
    checkIsValidPasswordResetToken(code)
    //dispatch()
  }, [])

  useEffect(() => {
    const isValid = password.isValid && confirmPassword.isValid
    isValid && setFormValid(isValid)
  }, [password.isValid && confirmPassword.isValid])

  const handleForm = (e) => {
    e.stopPropagation();
    e.preventDefault();

  };

  return (
    
      <div className="reset-password">
        <form className="reset-password__form" onSubmit={handleForm} >
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

          <Button
            className="reset-password__submit"
            type="submit"
            variant="contained"
            color="secondary"
            disabled={!formValid}
          >
            Отправить мне инструкции
          </Button>
          
        </form>
      </div>
    
  );
};