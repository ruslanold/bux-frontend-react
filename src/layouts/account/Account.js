import { React } from "react";
import { Route, Switch, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import Header from "../../shared/header/Header";
import Footer from "../../shared/footer/Footer";
import NavBar from "../../shared/navBar/NavBar";
import Logo from "../../shared/logo/Logo";
import UserProfile from "../../shared/userProfile/UserProfile";

import AllTasks from "../../screens/allTasks/AllTasks";
import Task from "../../screens/task/Task";
import Data from "../../screens/data/Data";
import NotFound from "../../screens/notFound/NotFound";

import "./Account.scss";

export const Account = () => {

  const isLoading = useSelector(state => state.auth.isLoading);

  const match = useRouteMatch();

  if (isLoading) {
    return "loading"
  }

  return (
    <div className="account-layout">
      <div className="account-layout__sidebar">
        <Logo />
        <UserProfile />
        <NavBar />
      </div>
      <div className="account-layout__content">
        <Header />
        <div className="account-layout__content-wrap">
          <Switch>
            <Route exact path={`${match.url}/`} component={() => "Типо профиль"} />
            <Route path={`${match.url}/tasks/:id`} component={Task} />
            <Route path={`${match.url}/tasks`} component={AllTasks} />
            <Route path={`${match.url}/data`} component={Data} />
            <Route path={`${match.url}/*`} component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
};
