import React from "react";
import "./HomePage.scss";
import { Avatar, GlobalStyles } from "@mui/material";
import {
  DateRange,
  Favorite,
  GifBox,
  Image,
  Loop,
  MapsUgc,
  MoreVert,
  Public,
  SentimentSatisfiedAlt,
  TurnedIn,
  Upload,
} from "@mui/icons-material";
import SideBar from "../../components/SideBar/SideBar";
import LeftBar from "../../components/LeftBar/LeftBar";

export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage__container">
        <div className="Sidebar">
          <SideBar />
        </div>
        <main className="main">
          <div className="foryouAndFollowing">
            <div className="foryouAndFollowing__foryou">
              <span>For you</span>
            </div>
            <div className="foryouAndFollowing__following">
              <span>Following</span>
            </div>
          </div>
          <div className="homePagePosts">
            <Avatar
              className="avatar"
              sx={{ width: "50px", height: "50px", marginTop: "20px" }}
            />
            <div className="homePagePosts__inputs">
              <input placeholder="What is happening?!" type="text" />
              <div className="homePagePosts__icons">
                <div className="">
                  <Image />
                  <GifBox />
                  <SentimentSatisfiedAlt sx={{ color: "white" }} />
                  <DateRange />
                </div>
                <button>Post</button>
              </div>
            </div>
          </div>
          <div className="postest">
            <div className="usersPosts">
              <div className="usersPosts__userInfo">
                <Avatar className="avatar" />
                <p>Aidar Bakytov</p>
                <span>@bakytv_</span>
                <MoreVert style={{ marginLeft: "40%" }} />
              </div>
              <div className="usersPosts__post"></div>
              <div className="userPosts__containerComents">
                <div className="usersPosts__comments">
                  <MapsUgc />
                  <span>1</span>
                </div>
                <div className="usersPosts__repost">
                  <Loop />
                  <span>1</span>
                </div>
                <div className="usersPosts__like">
                  <Favorite />
                  <span>20</span>
                </div>
                <div className="usersPosts__bookMarks">
                  <TurnedIn />
                  <Upload />
                </div>
              </div>
            </div>
            <div className="usersPosts">
              <div className="usersPosts__userInfo">
                <Avatar className="avatar" />
                <p>Aidar Bakytov</p>
                <span>@bakytv_</span>
                <MoreVert style={{ marginLeft: "40%" }} />
              </div>
              <div className="usersPosts__post"></div>
              <div className="userPosts__containerComents">
                <div className="usersPosts__comments">
                  <MapsUgc />
                  <span>1</span>
                </div>
                <div className="usersPosts__repost">
                  <Loop />
                  <span>1</span>
                </div>
                <div className="usersPosts__like">
                  <Favorite />
                  <span>20</span>
                </div>
                <div className="usersPosts__bookMarks">
                  <TurnedIn />
                  <Upload />
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="leftBar">
          <LeftBar />
        </div>
      </div>
    </div>
  );
}
