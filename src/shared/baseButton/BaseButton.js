import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./BaseButton.scss";

const BaseButton = ({
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

  const mainClassName = "button-base"

  const buildVariant = (selector) => {
    let colorClassName = color ? `--${color}` : "";
    let resultClassName = colorClassName ? selector + colorClassName : colorClassName;

    if (variant === "outlined") {
      resultClassName = `${selector}-${variant}`
      if(colorClassName) resultClassName += ` ${selector}-${variant}${colorClassName}`
    }
    else if (variant === "contained") {
      resultClassName = `${selector}-${variant}`
      if(colorClassName) resultClassName += ` ${selector}-${variant}${colorClassName}`
    }

    return resultClassName
  } 

  const classes = classNames(
    mainClassName,
    buildVariant(mainClassName),
    className
  );

  const onClickAction = (e) => {
    if (disabled) {
      return e.preventDefault();
    } else if (onClick) {
      return onClick(e);
    }
  };


  const onMouseDownAction = (e) => {
    const {
      currentTarget
    } = e;

    const maxSize = Math.max(
      currentTarget.clientWidth,
      currentTarget.clientHeight
    );

    const rect = currentTarget.getBoundingClientRect();
    const pulse = document.createElement("div");

    const pulseClasses = classNames(
      "button-base__pulse",
      buildVariant("button-base__pulse")
    );
    pulse.classList.value = pulseClasses;

    if (!staticPulse) {
      pulse.style.top = `${e.clientY - rect.top - maxSize / 2}px`;
      pulse.style.left = `${e.clientX - rect.left - maxSize / 2}px`;
    }

    pulse.style.width = `${maxSize}px`;
    pulse.style.height = `${maxSize}px`;

    currentTarget.lastElementChild.appendChild(pulse);

    const removePulse = () => {
      pulse.style.opacity = "0";
      currentTarget.addEventListener("transitionend", () => pulse.remove());
    };

    currentTarget.addEventListener("mouseup", removePulse);
    currentTarget.addEventListener("mouseleave", removePulse);
  };

  // const onMouseDownAction = (e) => {
  //   const { currentTarget } = e;
  //   const maxSize = Math.max(
  //     currentTarget.clientWidth,
  //     currentTarget.clientHeight
  //   );
  //   const rect = currentTarget.getBoundingClientRect();

  //   const pulse = document.createElement("div");
  //   pulse.classList.add("button__pulse", "button__pulse" + currentVariant);
  //   pulse.style.top = `${e.clientY - rect.top - maxSize / 2}px`;
  //   pulse.style.left = `${e.clientX - rect.left - maxSize / 2}px`;
  //   pulse.style.width = `${maxSize}px`;
  //   pulse.style.height = `${maxSize}px`;

  //   currentTarget.lastElementChild.appendChild(pulse);

  //   const removePulse = () => {
  //     pulse.style.opacity = "0";
  //     currentTarget.addEventListener("transitionend", () => pulse.remove());
  //   };

  //   currentTarget.addEventListener("mouseup", removePulse);
  //   currentTarget.addEventListener("mouseleave", removePulse);
  // };

  return (
    <button
      className={classes}
      onClick={onClickAction}
      onMouseDown={onMouseDownAction}
      disabled={disabled}
      {...props}
    >
      {children}
      <div className="button-base__root"></div>
    </button>
  );
};

BaseButton.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  pulse: PropTypes.bool,
  staticPulse: PropTypes.bool,
};

export default BaseButton;
