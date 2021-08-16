

import {
  ALERT_ADD, 
  ALERT_REMOVE
} from "../actionTypes";


export const removeAlert = (id) => ({ type: ALERT_REMOVE, payload: { id } })

export const error = (msg) => ({ type: ALERT_ADD, payload: { msg, type: "error"} })
export const warning = (msg) => ({ type: ALERT_ADD, payload: { msg, type: "warning"} })
export const info = (msg) => ({ type: ALERT_ADD, payload: { msg, type: "info"} })
export const success = (msg) => ({ type: ALERT_ADD, payload: { msg, type: "success"} })
