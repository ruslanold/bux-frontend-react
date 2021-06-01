import React from "react";
import "./Data.scss";

import { Notifications } from "@material-ui/icons";

import Button from "../../shared/button/Button";
import IconButton from "../../shared/iconButton/IconButton";

const Data = () => {
  return (
    <div className="data">
      Data
      <ul className="data__nav">
        <li className="data__nav-item">
          <Button>
            <div className="data__user">
              <img
                className="data__user-img"
                src="https://bucket-crud.s3.eu-central-1.amazonaws.com/users/images/1.jpeg"
                alt="user"
              />
            </div>
          </Button>
        </li>
      </ul>
      <ul className="data__nav">
        <li className="data__nav-item">
          <IconButton>
            <Notifications />
          </IconButton>
        </li>
        <li className="data__nav-item">
          <IconButton disabled>
            <Notifications />
          </IconButton>
        </li>
        <li className="data__nav-item">
          <IconButton color="primary">
            <Notifications />
          </IconButton>
        </li>
        <li className="data__nav-item">
          <IconButton color="secondary">
            <Notifications />
          </IconButton>
        </li>
        <li className="data__nav-item">
          <IconButton variant="contained">
            <Notifications />
          </IconButton>
        </li>
        <li className="data__nav-item">
          <IconButton variant="contained" disabled>
            <Notifications />
          </IconButton>
        </li>
        <li className="data__nav-item">
          <IconButton variant="contained" color="primary">
            <Notifications />
          </IconButton>
        </li>
        <li className="data__nav-item">
          <IconButton variant="contained" color="secondary">
            <Notifications />
          </IconButton>
        </li>
        <li className="data__nav-item">
          <IconButton variant="outlined">
            <Notifications />
          </IconButton>
        </li>
        <li className="data__nav-item">
          <IconButton variant="outlined" disabled>
            <Notifications />
          </IconButton>
        </li>
        <li className="data__nav-item">
          <IconButton variant="outlined" color="primary">
            <Notifications />
          </IconButton>
        </li>
        <li className="data__nav-item">
          <IconButton variant="outlined" color="secondary">
            <Notifications />
          </IconButton>
        </li>
      </ul>
      <ul className="data__nav">
        <li className="data__nav-item">
          <Button>button</Button>
        </li>
        <li className="data__nav-item">
          <Button disabled>disabled</Button>
        </li>
        <li className="data__nav-item">
          <Button color="primary">primary</Button>
        </li>
        <li className="data__nav-item">
          <Button color="secondary">secondary</Button>
        </li>
        <li className="data__nav-item">
          <Button variant="contained">contained</Button>
        </li>
        <li className="data__nav-item">
          <Button variant="contained" disabled>
            disabled
          </Button>
        </li>
        <li className="data__nav-item">
          <Button variant="contained" color="primary" disabled>
            disabled primary
          </Button>
        </li>
        <li className="data__nav-item">
          <Button variant="contained" color="primary">
            primary
          </Button>
        </li>
        <li className="data__nav-item">
          <Button variant="contained" color="secondary" disabled>
            secondary
          </Button>
        </li>
        <li className="data__nav-item">
          <Button variant="contained" color="secondary">
            secondary
          </Button>
        </li>
        <li className="data__nav-item">
          <Button variant="outlined">outlined</Button>
        </li>
        <li className="data__nav-item">
          <Button variant="outlined" disabled>
            disabled
          </Button>
        </li>
        <li className="data__nav-item">
          <Button variant="outlined" color="primary" disabled>
            primary
          </Button>
        </li>
        <li className="data__nav-item">
          <Button variant="outlined" color="primary">
            primary
          </Button>
        </li>
        <li className="data__nav-item">
          <Button variant="outlined" color="secondary" disabled>
            secondary
          </Button>
        </li>
        <li className="data__nav-item">
          <Button variant="outlined" color="secondary">
            secondary
          </Button>
        </li>
      </ul>
      <ul className="data__nav">
        <li className="data__nav-item data__nav-item--info">
          info
        </li>
        <li className="data__nav-item data__nav-item--warning">
          warning
        </li>
        <li className="data__nav-item data__nav-item--error">
          error
        </li>
        <li className="data__nav-item data__nav-item--success">
          success
        </li>
      </ul>
    </div>
  );
};
export default Data;
