import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import XIcon from "@mui/icons-material/X";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from "@mui/icons-material/DateRange";

export default function SideBar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (modalIsOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [modalIsOpen]);
  return (
    <div className="sideBar">
      <XIcon sx={{ color: "white", marginTop: "30px" }} />
      <div className="sideBar_Links">
        <div>
          <HomeIcon sx={{ color: "white", width: "40px", height: "40px" }} />
          <span
            style={{ paddingTop: "5px", fontSize: "20px", marginLeft: "10px" }}
          >
            Home
          </span>
        </div>
        <div>
          <SearchIcon sx={{ color: "white", width: "40px", height: "40px" }} />
          <span
            style={{ paddingTop: "5px", fontSize: "20px", marginLeft: "10px" }}
          >
            Explore
          </span>
        </div>
        <div>
          <NotificationsIcon
            sx={{ color: "white", width: "40px", height: "40px" }}
          />
          <span
            style={{ paddingTop: "5px", fontSize: "20px", marginLeft: "10px" }}
          >
            Notifications
          </span>
        </div>
        <div>
          <MailOutlineIcon
            sx={{ color: "white", width: "40px", height: "40px" }}
          />
          <span
            style={{ paddingTop: "5px", fontSize: "20px", marginLeft: "10px" }}
          >
            Messages
          </span>
        </div>
        <div>
          <BookmarkBorderIcon
            sx={{ color: "white", width: "40px", height: "40px" }}
          />
          <span
            style={{ paddingTop: "5px", fontSize: "20px", marginLeft: "10px" }}
          >
            Bookmarks
          </span>
        </div>
        <button onClick={() => setModalIsOpen(true)} className="post">
          Post
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CloseIcon
                onClick={() => setModalIsOpen(false)}
                sx={{ color: "white", cursor: "pointer" }}
              />
              <div style={{ color: "blue" }}>Drafts</div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                alignItems: "center",
              }}
            >
              <div style={{ width: "10%" }}>
                <Avatar
                  sx={{ border: "2px solid green" }}
                  src="/static/images/avatar/2.jpg"
                />
              </div>
              <div style={{ width: "90%" }}>
                <input
                  placeholder="What is happening?"
                  ref={inputRef}
                  type="text"
                  style={{
                    width: "100%",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                    fontSize: "18px",
                    outline: "none",
                    height: "40px",
                  }}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <div>
              <ImageIcon sx={{ color: "blue" }} />
              <PlaceIcon sx={{ color: "blue" }} />
              <DateRangeIcon sx={{ color: "blue" }} />
            </div>
            <div>
              <button className="buttonPost">Post</button>
            </div>
          </div>
        </Modal>
      </div>
      <div className="account">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{ border: "2px solid green" }}
            src="/static/images/avatar/2.jpg"
          />
          <div
            className="acc_info"
            style={{ display: "flex", flexDirection: "column", color: "white" }}
          >
            <div className="acc_name">Ринат</div>
            <div className="acc_email">@Rinat1111</div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <MoreHorizIcon
            sx={{ color: "white", display: "flex", justifyContent: "end" }}
          />
        </div>
      </div>
    </div>
  );
}
