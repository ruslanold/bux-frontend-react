import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { Button } from "../button/Button";
import Logo from "../logo/Logo";
import IconButton from "../iconButton/IconButton";

import { changeTheme } from "../../actions/themeActions"

import "./Header.scss";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();
  const location = useLocation()
  
  console.log(location.pathname);
  return (
    <div className="header">
      <div className="header__container container">
      <Logo />
        <ul className="header__nav">
          {user ? (

            <>
              {user && location.pathname === "/" &&
                <Link to="/account">
                  <Button variant="contained" color="primary">
                    В аккаунт
                 </Button>
                </Link>
              }
              <li className="header__nav-item">
                <IconButton
                  onClick={() => dispatch(changeTheme())}
                >
                  <span className="material-icons md-24">{ darkTheme ? "brightness_7" : "brightness_4"}</span>
                </IconButton>
              </li>


              <li className="header__nav-item">
                <IconButton
                >
                  <span className="material-icons md-24">{ "notifications"}</span>
                </IconButton>
              </li>
              <li className="header__nav-item">
                <div className="header__user">
                  <img
                    className="header__user-img"
                    src="https://bucket-crud.s3.eu-central-1.amazonaws.com/users/images/1.jpeg"
                    alt="user"
                  />
                </div>
              </li>
            </>
          ) : (
            <li className="header__nav-item">
                <Link to={{
                  pathname: "/login",
                  state: {background: location}
                }
                }>
                <Button variant="contained" color="secondary">
                  Войти
                </Button>
              </Link>
            </li>
          )}
        </ul>
      </div>

    </div>
  );
};
export default Header;
