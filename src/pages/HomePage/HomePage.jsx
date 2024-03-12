import React, { useEffect } from "react";
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
import Post from "../../components/post/Post";
import { usePorduct } from "../../context/PostContextProvider";

export default function HomePage() {
  const { getPosts, posts } = usePorduct();
  useEffect(() => {
    getPosts();
  }, []);
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
          {/* <div className="homePagePosts">
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
          </div> */}
          <div className="postest">
            {posts.map((elem) => (
              <Post elem={elem}/>
            ))}
          </div>
        </main>
        <div className="leftBar">
          <LeftBar />
        </div>
      </div>
    </div>
  );
}
