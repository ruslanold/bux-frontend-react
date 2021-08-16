import React from "react";
import {
  useLocation
} from "react-router-dom";


export const NotFound = () => {

  const location = useLocation();

  return (
    <div>
      Not Found {location.pathname}
    </div>
  )
}