import React from "react";

import Modal from "../modal/Modal";
import LogoImg from "../logo/LogoImg"
import SiteName from "../logo/SiteName"


import "./ModalLogin.scss";

const ModalLogin = ({ children }) => {

  return (
    <Modal>
      <div className="modal-logo">
        <LogoImg className="modal-logo__img" />
        <SiteName className="modal-logo__sitename"/>
      </div>
      {children}
    </Modal>
  );
};

export default ModalLogin;
