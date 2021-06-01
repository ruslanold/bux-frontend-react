import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import BaseButton from "../baseButton/BaseButton";

import "./Button.scss";

const Button = ({
  children,
  color,
  variant,
  onClick,
  className,
  disabled,
  pulse = true,
  staticPulse,
  ...props
}) => {

  const classes = classNames(
    "button",
    className
  );

  return (
    <BaseButton
      color={color}
      variant={variant}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      pulse={pulse}
      staticPulse={staticPulse}
      {...props}
    >
      <span className="button__label">{children}</span>
    </BaseButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  pulse: PropTypes.bool,
  staticPulse: PropTypes.bool,
};

export default Button;
