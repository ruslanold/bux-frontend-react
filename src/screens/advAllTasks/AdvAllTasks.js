import React from "react";
import { NavLink } from "react-router-dom";

import { NavTabs } from "../../shared/navTabs/NavTabs";

import "./AdvAllTasks.scss";

export const AdvAllTasks = () => {

  return (
    <div>
      <h1>All Tasks</h1>
      <NavTabs>
          <NavLink to="/account/adv/tasks" >Все задания</NavLink>
          <NavLink to="/account/adv/tasks/create" >Cоздать задание</NavLink>
      </NavTabs>
    </div>
  );
};
