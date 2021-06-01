import React from "react";
import {
  useLocation
} from "react-router-dom";


const NotFound = () => {

  const location = useLocation();

  return (
    <div>
      Not Found {location.pathname}
    </div>
  )
}

export default NotFound;