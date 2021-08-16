import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router";

import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";

import { Home } from "../../screens/home/Home";
import { NotFound } from "../../screens/notFound/NotFound"
import { Login } from "../../screens/login/Login";
import { Register } from "../../screens/register/Register";
import { Forgot } from "../../screens/forgot/Forgot";
import { ResetPassword } from "../../screens/resetPasword/ResetPassword";

import "./Main.scss";

export const Main = ({isAuth}) => {

  const location = useLocation();

  let background = location.state && location.state.background;
  if (!background && location.pathname === "/login" || location.pathname === "/register") {
    background = {
      pathname: "/",
    }
    location.state = background
  }
  

  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout__content">
        {console.log(background, "background")}
        {console.log(location, "location")}
        <Switch location={background || location} >
          <Route exact path="/" component={Home} />
          <Route path="/forgot" component={Forgot} />
          <Route path="/help" component={() => "help"} />
          <Route path="/reset/password" component={ResetPassword} />
          <Route path="*" component={NotFound} />
        </Switch>
        {
          background &&
          <>
            <Route path="/login" children={isAuth ? <Redirect to="/" /> : <Login />} />
            <Route path="/register" children={isAuth ? <Redirect to="/" /> : <Register />} />
            <Route path="/forgot" children={isAuth ? <Redirect to="/" /> : <Forgot />} />
          </>
        }
      </div>
      <Footer />
    </div>
  );
};
