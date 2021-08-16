import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Input.scss"

export const Input = ({ className, icon, errorMsg, ...props}) => {
  
  const classes = classNames(
    "input__item",
    className
  );
  

  return (
    <div className="input">
        {console.log("render Input component")}
      
      <div className="input__inner">
        { icon && <span className="input__icon material-icons">{icon}</span>}
        <input
          className={classes}
          autoComplete="true"
          {...props}
        />
      </div>

      { errorMsg && <div className="input__error">{errorMsg}</div>}
    </div>
  )

}

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  errorMsg:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
};
  