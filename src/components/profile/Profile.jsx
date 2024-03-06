import { ArrowBack, CalendarMonth } from "@mui/icons-material";
import { Avatar, colors } from "@mui/material";
import React from "react";
import "./profile.scss";
import avatarProf from "../../assets/Фото 3-4-24, 12.59 — копия.jpg";
import avatarBg from "../../assets/166808-bagan-tandzhiro_kamado-ubijca_demonov_kimetsu_no_yaiba-art-cifrovoe_iskusstvo-3840x2160.png";

const Profile = () => {
  return (
    <>
      <div className="profileNavbar">
        <div className="profileNavbar__name">
          <ArrowBack sx={{ color: "white", width: "60px", height: "40px" }} />
          <div className="profileNavbar-name__post">
            <span>Aidar Bakytov</span>
            <p style={{ textOverflow: "unset" }}>0 post</p>
          </div>
        </div>
      </div>
      <div className="profilePhoto">{/* <img src={avatarBg} alt="" /> */}</div>
      <div className="profileTitle">
        <div className="profileTitle__PhotoAvatar">
          <img src={avatarProf} alt="" />
          <p style={{ color: "white" }}>Edit Profile</p>
        </div>
        <div className="profileTitle__about">
          <h3>Aidar Bakytov</h3>
          <p>@bakytv</p>
          <div className="profileTitle-about__data">
            <CalendarMonth sx={{ color: "gray" }} />
            <span>Joined February 2024</span>
          </div>
          <div className="pofileTitle-about__followers">
            <p>0 Following</p>
            <p>0 Followers</p>
          </div>
        </div>
      </div>
      <div className="tweets">
        <div className="tweets__travel">
          <div className="tweets-travel__posts">
            <span>Posts</span>
          </div>
          <div className="tweets-travel__repies">
            <span>Repies</span>
          </div>
          <div className="tweets-travel__highlights">
            <span>Highlights</span>
          </div>
          <div className="tweets-travel__articles">
            <span>Articles</span>
          </div>
          <div className="tweets-travel__media">
            <span>Media</span>
          </div>
          <div className="tweets-travel__likes">
            <span>Likes</span>
          </div>
        </div>
      </div>
      <div className="newsTemp">
        <h2>Who to Follow </h2>
        <div className="newsTemp__all">
          <div className="newsTemp__users">
            <Avatar sx={{ width: "43px", height: "43px" }} />
            <div className="newsTemp-users__nickName">
              <span>Bill Gates</span>
              <span>@Bill Gates</span>
            </div>
          </div>
          <span id="follow">Follow</span>
        </div>
      </div>
      <div className="newsTemp">
        <div className="newsTemp__all">
          <div className="newsTemp__users">
            <Avatar sx={{ width: "43px", height: "43px" }} />
            <div className="newsTemp-users__nickName">
              <span>Bill Gates</span>
              <span>@Bill Gates</span>
            </div>
          </div>
          <span id="follow">Follow</span>
        </div>
      </div>
      <div className="newsTemp">
        <div className="newsTemp__all">
          <div className="newsTemp__users">
            <Avatar sx={{ width: "43px", height: "43px" }} />
            <div className="newsTemp-users__nickName">
              <span>Bill Gates</span>
              <span>@Bill Gates</span>
            </div>
          </div>
          <span id="follow">Follow</span>
        </div>
      </div>
    </>
  );
};

export default Profile;
