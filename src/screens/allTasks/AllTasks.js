import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import { IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { NavTabs } from "../../shared/navTabs/NavTabs";

import { getAllTasks } from "../../actions";


import "./AllTasks.scss";

export const AllTasks = () => {

  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  return (
    <div>
      <h1>All Tasks</h1>
      <NavTabs>
          <NavLink to="/account/tasks" >Все задания <span className="material-icons md-24">{ "notifications"}</span></NavLink>
          <NavLink to="/account/favorites" >Избраные</NavLink>
          <NavLink to="/account/started" >Начатые</NavLink>
          <NavLink to="/account/pending" >На проверке</NavLink>
          <NavLink to="/account/rework" >На доработке</NavLink>
          <NavLink to="/account/resolved" >Оплаченые</NavLink>
          <NavLink to="/account/rejected" >Отклоненые</NavLink>
      </NavTabs>

      <div className="tasks">
        <ul className="tasks__list">
          {tasks && tasks.map((task) => (
            <li className="tasks__item" key={task.id}>
              <div className="tasks__header">
                <Link
                  className="tasks__header-link"
                  to={`account/users/${task.user.id}`}
                >
                  <img
                    className="tasks__header-img"
                    src={task.user.image}
                    alt={task.user.name}
                  />
                </Link>
                <div className="tasks__header-title">{task.title}</div>
                <IconButton className="tasks__header-icon">
                  <MoreVert />
                </IconButton>
              </div>
              {/* <div className="tasks__content">{task.description}</div> */}
              <div className="tasks__footer">
                <div className="tasks__footer-icons">
                  <span className="tasks__footer-icon--green">1212</span>
                  <span className="tasks__footer-icon--red">2121</span>
                </div>
                <div className="tasks__footer-price">{task.price} руб.</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="tasks__nav">
          <ul className="tasks__nav-list">
            {tasks && tasks.map((task) => (
              <li className="tasks__item" key={task.id}>
                <div className="tasks__header">
                  <Link
                    className="tasks__header-link"
                    to={`account/users/${task.user.id}`}
                  >
                    <img
                      className="tasks__header-img"
                      src={task.user.image}
                      alt={task.user.name}
                    />
                  </Link>
                  <div className="tasks__header-title">{task.title}</div>
                  <IconButton className="tasks__header-icon">
                    <MoreVert />
                  </IconButton>
                </div>
                {/* <div className="tasks__content">{task.description}</div> */}
                <div className="tasks__footer">
                  <div className="tasks__footer-icons">
                    <span className="tasks__footer-icon--green">1212</span>
                    <span className="tasks__footer-icon--red">2121</span>
                  </div>
                  <div className="tasks__footer-price">{task.price} руб.</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
