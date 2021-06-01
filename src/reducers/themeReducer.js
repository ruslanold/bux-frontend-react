import { THEME } from "../actionTypes";

const initialState = {
  darkTheme: Boolean(localStorage.getItem("darkTheme"))
}

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {

    case THEME: {
      return {...state, darkTheme: !state.darkTheme }
    }
      
    default:
      return state;
  }
}