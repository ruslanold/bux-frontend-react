import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { themeReducer } from "./themeReducer";
import { tasksReducer } from "./tasksReducer";
import { alertReducer } from "./alertReducer";

export default combineReducers({
    auth: authReducer,
    theme: themeReducer,
    tasks: tasksReducer,
    alert: alertReducer
});