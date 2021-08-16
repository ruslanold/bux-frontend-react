import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ isLoading, isAuth, component: Component, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={
        () => {
          console.log(isAuth, "isAuth PrivateRoute");
          console.log(isLoading, " isLoading PrivateRoute");

          if (isLoading) {
            return "loading";
          }
          
          if (isAuth) {
            return <Component />;
          }
  
          return <Redirect to="/" />;
        }
      }

    />
  );
};

export default PrivateRoute;