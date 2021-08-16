import {
  ALERT_ADD,
  ALERT_REMOVE,
} from "../actionTypes";

const initialState = {
  items: []
};


export const alertReducer = (state = initialState, action) => {
  switch (action.type) {

    case ALERT_ADD: {
      action.payload.id = state.items.length + 1
      state.items.unshift(action.payload);
      return {...state};
    }

    case ALERT_REMOVE:{
      return {...state, items: state.items.filter(el => el.id != action.payload.id)};
    }

    default:
      return state;
    }
}