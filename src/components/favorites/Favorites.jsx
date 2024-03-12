import React from "react";
import "./favorites.scss";
import SideBar from "../SideBar/SideBar";
import { MoreHoriz } from "@mui/icons-material";
import LeftBar from "../LeftBar/LeftBar";
const Favorites = () => {
  return (
    <>
      <div className="favorites">
        <div className="Sidebar">
          <SideBar />
        </div>
        <div className="favoritesContainer">
          <div className="favoritesContainer__header">
            <div className="header__tegs">
              <h3>Bookmarks</h3>
              <span>@Bakytv_</span>
            </div>
            <MoreHoriz />
          </div>
          <div className="favoritesContainer__favorite"></div>
        </div>
        <div className="leftBar">
          <LeftBar />
        </div>
      </div>
    </>
  );
};

export default Favorites;
