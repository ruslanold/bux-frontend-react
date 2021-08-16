import { React } from "react";
import { Route, Switch, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import Header from "../../shared/header/Header";
import Footer from "../../shared/footer/Footer";
import NavBar from "../../shared/navBar/NavBar";
import UserProfile from "../../shared/userProfile/UserProfile";

import { AllTasks } from "../../screens/allTasks/AllTasks";
import { Task } from "../../screens/task/Task";
import { Data } from "../../screens/data/Data";
import { NotFound } from "../../screens/notFound/NotFound";
import { AdvAllTasks } from "../../screens/advAllTasks/AdvAllTasks";
import { CreateTask } from "../../screens/createTask/CreateTask";
import { CreateVisit } from "../../screens/createVisit/CreateVisit";

import "./Account.scss";

export const Account = () => {
  const isLoading = useSelector((state) => state.auth.isLoading);

  const match = useRouteMatch();

  if (isLoading) {
    return "loading";
  }

  return (
    <div className="account-layout">
      <Header />
      <div className="account-layout__container container">
        <div className="account-layout__sidebar">
          <UserProfile />
          <NavBar />
        </div>
        <div className="account-layout__content">
          <Switch>
            <Route
              exact
              path={`${match.url}/`}
              component={() => "Типо профиль"}
            />
            <Route path={`${match.url}/tasks/:id`} component={Task} />
            <Route path={`${match.url}/tasks`} component={AllTasks} />
            <Route exact path={`${match.url}/adv/tasks`} component={AdvAllTasks} />
            <Route path={`${match.url}/adv/tasks/create`} component={CreateTask} />
            <Route path={`${match.url}/adv/visits`} component={CreateVisit} />
            <Route path={`${match.url}/data`} component={Data} />
            <Route path={`${match.url}/*`} component={NotFound} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};
