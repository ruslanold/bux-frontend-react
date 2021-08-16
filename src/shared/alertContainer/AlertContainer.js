import React from "react";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "../iconButton/IconButton";

import { removeAlert } from "../../actions";

import "./AlertContainer.scss";


export const AlertContainer = () => {

  const { items } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const removeItem = (e) => {
    e.stopPropagation()
    const { currentTarget } = e;
    dispatch(removeAlert(currentTarget.dataset.id))
  }

  return (
    <div className="alert" >
      {console.log(items, "AlertContainer")}
      {items.map((el, i) => (
        <div className={`alert__item alert__item--${el.type}`} onClick={removeItem} data-id={el.id} key={i}>
          <span className="alert__msg">{el.msg}</span>
          <IconButton size="small">
            <span className="material-icons md-18">{"close"}</span>
          </IconButton>
        </div>
      ))}
    </div>
  )
}