import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';

import "./UserProfile.scss";

const UserProfile = () => {

  const user = useSelector((state) => state.auth.user);

  return (
    <div className="user-profile">
      <img className="user-profile__img" src={user.img ? user.img : "./default-user-img.png"} alt=""/>
      <div className="user-profile__name">{user.name}</div>
      <div className="user-profile__balance">
        <div className="user-profile__balance-basic">
          <Link to="/account" title="Вывести">
            <Button className="user-profile__btn" variant="contained" color="primary" >
            {/* {user.balance + "$"} */}
            0.00 $
            <span class="user-profile__icon material-icons md-18">{"account_balance_wallet"}</span>
            </Button>
          </Link>
          <div className="user-profile__info">основной баланс</div>
        </div>
        <div className="user-profile__balance-advertising">
          <Link to="/account" title="Пополнить баланс">
            <Button className="user-profile__btn" variant="contained" color="secondary" >
              {/* {user.balance + "$"} */}
              110.00 $
              <span class="user-profile__icon material-icons md-18">{"payment"}</span>
            </Button>
          </Link>
          <div className="user-profile__info">рекламный баланс</div>
        </div>


      </div>
      {/* <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          <Button variant="contained" color="primary">settings</Button>
          <Button variant="contained" color="primary">logout</Button>
      </ButtonGroup> */}

      <ButtonGroup class="user-profile__nav" variant="text" color="primary" aria-label="text primary button group">
        <Button><span class="user-profile__icon material-icons md-18">{"payment"}</span></Button>
        <Button><span class="user-profile__icon material-icons md-18">{"settings"}</span></Button>
        <Button><span class="user-profile__icon material-icons md-18">{"logout"}</span></Button>
      </ButtonGroup>
    </div>
  );
};

export default UserProfile;
