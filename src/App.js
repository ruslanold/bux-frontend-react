import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

import { Account, Main } from "./layouts";

import PrivateRoute from "./helpers/PrivateRoute";

import { AlertContainer } from "./shared/alertContainer/AlertContainer"

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
      <AlertContainer/>
    </div>
  );
}

export default App;
