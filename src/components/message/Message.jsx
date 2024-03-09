import React, { useState } from "react";
import "./message.scss";
import {
  Close,
  Mail,
  MessageOutlined,
  Search,
  Settings,
} from "@mui/icons-material";

const Message = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="messagePage">
        <div className="messagePage__container">
          <div className="messagePage-container__messages">
            <h3>Messages</h3>
            <div className="">
              <Settings />
              <Mail />
            </div>
          </div>
          <div className="messagePage-container__welcomeText">
            <h2>
              Welcome to your <br /> inbox !
            </h2>
            <span>
              Drop a line, share posts and more with private <br />{" "}
              conversations between you and others on X.{" "}
            </span>
            <button onClick={openModal}>Write a message</button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal__closend">
              <div className="modal-closed__message">
                <Close onClick={onClose} />
                <span>New Message</span>
              </div>
              <button>Next</button>
            </div>
            <div className="modal__search">
              <Search />
              <input placeholder="Search People" type="text" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
