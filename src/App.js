import { Route, Switch } from "react-router";
import {shallowEqual, useSelector } from "react-redux";

import { Account, Main } from "./layouts";

import PrivateRoute from "./utils/PrivateRoute";

import "./App.scss";

function App() {
  const {isAuth, isLoading} = useSelector((state) => state.auth);
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  return (
    <div className={`${darkTheme ? "theme--dark" : "theme--default"}`}>
      <Switch>
        <PrivateRoute isAuth={isAuth} isLoading={isLoading} path="/account" component={Account} />
        <Route isAuth={isAuth} component={Main} />
      </Switch>
    </div>
  );
}

export default App;
