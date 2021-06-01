import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./IconButton.scss";

import BaseButton from "../baseButton/BaseButton";


const IconButton = ({
  children,
  color,
  variant,
  onClick,
  className,
  disabled,
  pulse,
  staticPulse = true,
  ...props
}) => {

  const classes = classNames(
    "icon-button",
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
      <span className="icon-button__label">{children}</span>
    </BaseButton>
  );
};

IconButton.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  pulse: PropTypes.bool,
  staticPulse: PropTypes.bool,
};

export default IconButton;
