import { Settings } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./notifications.scss";

const Notifications = () => {
  return (
    <>
      <div className="notifications">
        <div className="notifications__container">
          <div className="notifactions-container__settings">
            <h2>Notifications</h2>
            <Settings />
          </div>
          <div className="notifactions-container__choose">
            <span>All</span>
            <span>Verified</span>
            <span>Mentions</span>
          </div>
        </div>
        <div className="notifications__notifaction">
          <Avatar />
          <span>
            There was a login to your account @bakytv from a new device on 04{" "}
            <br /> мар. 2024 г.. Review it now.
          </span>
        </div>
        <div className="notifications__notifaction">
          <Avatar />
          <span>
            There was a login to your account @bakytv from a new device on 04{" "}
            <br /> мар. 2024 г.. Review it now.
          </span>
        </div>
      </div>
    </>
  );
};

export default Notifications;
