import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./NavTabs.scss";

export const NavTabs = ({children}) => {

  return (
    <div className="nav-tabs">
      <ul className="nav-tabs__list">
        {children && children.map(el => {
          return (
            <li className="nav-tabs__item">{el}</li>
          )
        })}
      </ul>
    </div>
  );
};

NavTabs.propTypes = {
  children: PropTypes.node,
};
