import React from "react";
import "./LeftBar.scss";
import { More, MoreHoriz, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";

export default function LeftBar() {
  return (
    <>
      <div className="rightBar">
        <div className="rightBar__container">
          <div className="rightBar__input">
            <Search />
            <input type="text" placeholder="Search" />
          </div>
          <div className="rightBar__subscribePremium">
            <h3>Subscribe to Premium</h3>
            <p>
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </p>
            <button>Subscribe</button>
          </div>
          <div class="trending-container">
            <h3 class="trending-header">Trending now</h3>
            <div class="trending-content">
              <div class="trending-item">
                <div class="trending-info">
                  <p class="trending-title">Trends for you</p>
                  <div class="trending-hashtag">#Kyrgyzstan</div>
                </div>
                <div class="trending-actions">
                  <MoreHoriz />
                </div>
              </div>
              <div class="show-more-link">
                <a href="/i/trends" class="show-more-button">
                  Show more
                </a>
              </div>
            </div>
          </div>

          <div className="rightBar__recToFollow">
            <h3>Who to follow</h3>
            <div className="rightBar-recToFollow__users">
              <div style={{ display: "flex" }}>
                <Avatar />
                <div className="rightBar-recToFollow-users__nickname">
                  <span>Mr.Beast</span>
                  <span>@MrBeast</span>
                </div>
              </div>
              <div className="rightBar-recToFollow__follow">
                <span>Follow</span>
              </div>
            </div>
            <div className="rightBar-recToFollow__users">
              <div style={{ display: "flex" }}>
                <Avatar />
                <div className="rightBar-recToFollow-users__nickname">
                  <span>Mr.Beast</span>
                  <span>@MrBeast</span>
                </div>
              </div>
              <div className="rightBar-recToFollow__follow">
                <span>Follow</span>
              </div>
            </div>
            <div className="rightBar-recToFollow__users">
              <div style={{ display: "flex" }}>
                <Avatar />
                <div className="rightBar-recToFollow-users__nickname">
                  <span>Mr.Beast</span>
                  <span>@MrBeast</span>
                </div>
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
      </div>
      <div className="aboutComp">
        <span>Terms of Service Privacy Policy Cookie Policy</span>
      </div>
    </>
  );
}
