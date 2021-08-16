import { useState } from "react";
import { useDebounce } from ".";

export const useInput = (initValue, validations) => {
  const [value, setValue] = useState(initValue);
  const [errors, setErrors] = useState({});

  const callbackDebounce = useDebounce(validator, 700);

  const isEmptyMsg = "Поле не должно быть пустым";
  const isEqualsMsg = (fieldName) => `Поле не равно ${fieldName}`;
  const minLengthMsg = (length) => `Поле не должно быть меньше ${length} символов`;
  const maxLengthMsg = (length) => `Поле не должно быть больше ${length} символов`;
  const isEmailMsg = "Введите коректный email";

  const isEmptyRegex = /^\s*$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onChange = (e) => {
    setValue(e.target.value);
    callbackDebounce(e.target.value);
  };


  const validationsDetail = () => {
    const values = Object.values(errors); 

    const isError = values.find((el) => !!el);
    const isValid = values.length && !isError;

    return {
      isValid: !!isValid, 
      errors: (isError && [isError]) || []
    }

  }

  const detail = validationsDetail();
  
  function validator(currentValue) {
    const _errors = {};

    const setError = (error) => {
      Object.assign(_errors, error);
    };

    const validators = {
      isEmpty: () => {
        !currentValue || isEmptyRegex.test(currentValue)
          ? setError({ isEmpty: isEmptyMsg })
          : setError({ isEmpty: "" });
      },

      isEquals: ({ fieldName, fieldValue }) => {
        currentValue !== fieldValue
          ? setError({ isEquals: isEqualsMsg(fieldName) })
          : setError({ isEquals: "" });
      },

      minLength: (length) => {
        currentValue.length < length
          ? setError({ minLength: minLengthMsg(length) })
          : setError({ minLength: "" });
      },

      maxLength: (length) => {
        currentValue.length > length
          ? setError({ maxLength: maxLengthMsg(length) })
          : setError({ maxLength: "" });
      },

      isEmail: () => {
        !emailRegex.test(currentValue)
          ? setError({ isEmail: isEmailMsg })
          : setError({ isEmail: "" });
      },

      // usernameisUnique: () => {
      //   detail.isValid && callback()
      // }

      // emailIsUnique: () => {

      // }

    };

    Object.entries(validations).forEach(([objKey, objValue]) => {
      if (!validators[objKey]) {
        new Error("No such validation" + objKey);
      }

      validators[objKey](objValue);
    });

    setErrors(_errors);
  }


  return {
    value,
    onChange,
    ...detail,
  };
};
