import React from "react";
import "./LeftBar.scss";
import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";

export default function LeftBar() {
  return (
    <>
      <div className="rightBar">
        <div className="rightBar__input">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
        <div className="rightBar__recToFollow">
          <h3>Who to follow</h3>
          <div className="rightBar-recToFollow__users">
            <Avatar />
            <div className="rightBar-recToFollow-users__nickname">
              <span>Mr.Beast</span>
              <span>@MrBeast</span>
            </div>
            <div className="rightBar-recToFollow__follow">
              <span>Follow</span>
            </div>
          </div>
          <div className="rightBar-recToFollow__users">
            <Avatar />
            <div className="rightBar-recToFollow-users__nickname">
              <span>Mr.Beast</span>
              <span>@MrBeast</span>
            </div>
            <div className="rightBar-recToFollow__follow">
              <span>Follow</span>
            </div>
          </div>
          <div className="rightBar-recToFollow__users">
            <Avatar />
            <div className="rightBar-recToFollow-users__nickname">
              <span>Mr.Beast</span>
              <span>@MrBeast</span>
            </div>
            <div className="rightBar-recToFollow__follow">
              <span>Follow</span>
            </div>
          </div>
          <div className="rightBar__showMore">
            <span>Show More</span>
          </div>
        </div>
      </div>
      <div className="aboutComp">
        <span>Terms of Service Privacy Policy Cookie Policy</span>
      </div>
    </>
  );
}
