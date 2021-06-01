import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

import "./AllTasks.scss";

const AllTasks = () => {
  const [state, setState] = useState({
    tasks: [],
  });

  useEffect(() => {
    // (async () => {
    //   const tasks = await new TaskService().getTasks();
    //   console.log(tasks);
    //   setState({ tasks: tasks });
    // })();
  }, []);

  return (
    <div>
      All Tasks
      <div className="tasks">
        <ul className="tasks__list">
          {state.tasks.map((task) => (
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
            {state.tasks.map((task) => (
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

export default AllTasks;
