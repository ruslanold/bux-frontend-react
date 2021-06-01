import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  const handleClick = (e) => {
    const { currentTarget } = e;
    currentTarget.classList.add("nav__item--active");
  };

  return (
    <div className="nav">
      <ul className="nav__list">
        <li onClick={handleClick} className="nav__item">
          <span>Aккаунт</span>
          <ul className="nav__submenu">
            <li className="nav__submenu-item">
              <Link to="/">Aккаунт</Link>
            </li>
            <li className="nav__submenu-item">
              <Link to="/">Aккаунт</Link>
            </li>
            <li className="nav__submenu-item">
              <Link to="/">Aккаунт</Link>
            </li>
          </ul>
        </li>
        <li onClick={handleClick} className="nav__item">
          <span>Зарабатывать</span>
          <ul className="nav__submenu">
            <li className="nav__submenu-item">
              <Link to="/account/tasks">Задания</Link>
            </li>
            <li className="nav__submenu-item">
              <Link to="/account/tasks">Задания</Link>
            </li>
            <li className="nav__submenu-item">
              <Link to="/account/tasks">Задания</Link>
            </li>
          </ul>
        </li>
        <li onClick={handleClick} className="nav__item">
          <span>Рекламировать</span>
          <ul className="nav__submenu">
            <li className="nav__submenu-item">
              <Link to="/">Рекламировать</Link>
            </li>
            <li className="nav__submenu-item">
              <Link to="/">Рекламировать</Link>
            </li>
            <li className="nav__submenu-item">
              <Link to="/">Рекламировать</Link>
            </li>
          </ul>
        </li>
        <li onClick={handleClick} className="nav__item">
          <span>Компоненты</span>
          <ul className="nav__submenu">
            <li className="nav__submenu-item">
              <Link to="/account/data">Компоненты</Link>
            </li>
            <li className="nav__submenu-item">
              <Link to="/">Компоненты</Link>
            </li>
            <li className="nav__submenu-item">
              <Link to="/">Компоненты</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
