import { useEffect, useState } from "react"

export const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(false)
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [isEmail, setEmail] = useState(false)

    const isEmptyMsg = "Поле не должно быть пустым";
    const minLengthMsg = (length) => `Поле не должно быть меньше ${length} символов`;
    const maxLengthMsg = (length) => `Поле не должно быть больше ${length} символов`;
    const isEmailMsg = "Введите коректный email";

    const isEmptyRegex = /^\s*$/
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    useEffect(() => {

        const validators = {

            isEmpty: () => {
                !value || isEmptyRegex.test(value) ? setEmpty(isEmptyMsg) : setEmpty(false)
            },

            minLength: (length) => {
                value.length < length ? setMinLengthError(minLengthMsg(length)) : setMinLengthError(false)
            },

            maxLength: (length) => {
                value.length > length ? setMaxLengthError(maxLengthMsg(length)) : setMaxLengthError(false)
            },

            isEmail: () => {
                emailRegex.test(value) ? setEmail(false) : setEmail(isEmailMsg) 
            }
        }

        Object.entries(validations).forEach(([objKey, objValue]) => {
            validators[objKey](objValue)
        })

    }, [value, validations])


    const error = isEmpty || minLengthError || maxLengthError || isEmail

    return { 
        isValid: !!error,
        errors:  error && [error] || []
    }

}