import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "../reducers";
import { initialUser } from "../actions"

const middlewares = applyMiddleware(thunk);

export const store = createStore(reducers, composeWithDevTools(middlewares));
store.dispatch(initialUser())
