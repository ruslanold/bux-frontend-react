import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router";

import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";

import HomePage from "../../screens/home/Home";
import NotFound from "../../screens/notFound/NotFound"
import Login from "../../screens/login/Login";
import Register from "../../screens/register/Register";

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
          <Route exact path="/" component={HomePage} />
          <Route path="/help" component={() => "help"} />
          <Route path="*" component={NotFound} />
        </Switch>
        {
          background &&
          <>
            <Route path="/login" children={!isAuth ? <Login /> : <Redirect to="/" />} />
            <Route path="/register" children={!isAuth ? <Register /> : <Redirect to="/" />} />
          </>
        }
      </div>
      <Footer />
    </div>
  );
};
