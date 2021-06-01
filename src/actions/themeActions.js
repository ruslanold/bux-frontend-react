import { THEME } from "../actionTypes";

export const changeTheme = () => {

  const darkTheme = Boolean(localStorage.getItem("darkTheme"))
  localStorage.setItem("darkTheme", darkTheme  ? ""  : true  )
  return { type: THEME };
};
