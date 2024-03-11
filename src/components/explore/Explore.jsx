import React from "react";
import "./explore.scss";
import { MoreHoriz, Search, Settings } from "@mui/icons-material";
import SideBar from "../../components/SideBar/SideBar";
import LeftBar from "../../components/LeftBar/LeftBar";

const Explore = () => {
  return (
    <>
      <div className="exploreComponent">
        <div className="explore_container">
          <div className="Sidebar">
            <SideBar />
          </div>
          <div className="explorePage">
            <div className="explorePage_container">
              <div className="explorePage__search">
                <Search />
                <input type="text" placeholder="Seacrh" />
                <Settings />
              </div>
              <h3>Trend for you</h3>
              <div className="explorePage__trendsForU">
                <div className="explorePage-trendsForU__trending">
                  <span>Trending in Political figures</span>
                  <p>Rigged</p>
                  <span>38.K Posts</span>
                </div>
                <MoreHoriz />
              </div>
              <div className="explorePage__trendsForU">
                <div className="explorePage-trendsForU__trending">
                  <span>Trending in Political figures</span>
                  <p>Welcome to Nato</p>
                  <span>38.K Posts</span>
                </div>
                <MoreHoriz />
              </div>
              <div className="explorePage__trendsForU">
                <div className="explorePage-trendsForU__trending">
                  <span>Trending in Political figures</span>
                  <p>Rigged</p>
                  <span>38.K Posts</span>
                </div>
                <MoreHoriz />
              </div>
              <div className="explorePage__showMore">
                <h3>Show More</h3>
              </div>
            </div>
          </div>
          <div className="leftBar">
            <LeftBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
