import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";

import "./Modal.scss";

const Modal = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  const goBack = (e) => {
    e.stopPropagation();
    
    const { currentTarget, target } = e;

    if (target === currentTarget) {
      const previousHistory = location.state && location.state.background 
      
      if (previousHistory) {
        return history.goBack()
      }
      history.push("/");
      
    }

  };
  return (
    <div className="modal" onMouseDown={goBack}>
      <div className="modal__wrrap">{children}</div>
    </div>
  );
};

export default Modal;
