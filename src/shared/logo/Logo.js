import React from "react";
import { Link } from "react-router-dom";

import LogoImg from "./LogoImg"
import SiteName from "./SiteName"

import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link className="logo__link" to="/">
        <LogoImg className="logo__img" />
        <SiteName className="logo__text" />
      </Link>
    </div>
  );
};

export default Logo;
