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
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import { AddCircle, Person } from "@mui/icons-material";
import { usePorduct } from "../../context/PostContextProvider";
import { avatar, name } from "../../helpers/const";
import TagIcon from "@mui/icons-material/Tag";

export default function SideBar() {
  //! USE POST
  const { categories, getCategories, addPost, getPosts, posts } = usePorduct();
  // ! STATE
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { oneUser, getOneUser } = useAuth();

  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [hashtag, setHashtag] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // ! HOOKS
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);
  useEffect(() => {
    if (modalIsOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [modalIsOpen]);
  useEffect(() => {
    getOneUser();
  }, []);

  // ! FUNCTIONS
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleHashClick = () => {
    setShowCategories(!showCategories);
  };

  const handleCategoryClick = (category) => {
    setHashtag(`#${category}`);
    const input = document.querySelector(".modal-actions textarea");
    if (input) {
      input.value += ` #${category} `;
    }
  };

  // ! ADD POST

  const handleCLick = () => {
    let formData = new FormData();
    formData.append("creator", name.username);
    formData.append("description", description);
    formData.append("last_name", name.email);

    const hashtagsArray = new Set([
      ...description.split(" "),
      ...hashtag.split(" "),
    ]);
    formData.append("description", Array.from(hashtagsArray).join(" "));
    formData.append("image", image);
    addPost(formData);
    setModalIsOpen(false);
  };

  return (
    <div className="positon">
      <div className="sideBar">
        <XIcon sx={{ color: "white", marginTop: "20px" }} />
        <div className="sideBar_Links">
          <NavLink to={"/"}>
            <div>
              <HomeIcon
                sx={{ color: "white", width: "40px", height: "40px" }}
              />
              <span
                style={{
                  paddingTop: "5px",
                  fontSize: "20px",
                  marginLeft: "10px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Home
              </span>
            </div>
          </NavLink>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/explore")}
          >
            <SearchIcon
              sx={{ color: "white", width: "40px", height: "40px" }}
            />
            <span
              style={{
                paddingTop: "5px",
                fontSize: "20px",
                marginLeft: "10px",
              }}
            >
              Explore
            </span>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/notifications")}
          >
            <NotificationsIcon
              sx={{ color: "white", width: "40px", height: "40px" }}
            />
            <span
              style={{
                paddingTop: "5px",
                fontSize: "20px",
                marginLeft: "10px",
              }}
            >
              Notifications
            </span>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/message")}
          >
            <MailOutlineIcon
              sx={{ color: "white", width: "40px", height: "40px" }}
            />
            <span
              style={{
                paddingTop: "5px",
                fontSize: "20px",
                marginLeft: "10px",
              }}
            >
              Messages
            </span>
          </div>
          <div>
            <BookmarkBorderIcon
              sx={{ color: "white", width: "40px", height: "40px" }}
            />
            <span
              style={{
                paddingTop: "5px",
                fontSize: "20px",
                marginLeft: "10px",
              }}
            >
              Bookmarks
            </span>
          </div>
          <NavLink
            to={"/profile"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>
              <Person sx={{ color: "white", width: "40px", height: "40px" }} />
              <span
                style={{
                  paddingTop: "5px",
                  fontSize: "20px",
                  marginLeft: "10px",
                }}
              >
                Avatar
              </span>
            </div>
          </NavLink>
          <button onClick={() => setModalIsOpen(true)} className="post">
            Post
          </button>
          <div className="post2">
            <AddCircle className="" onClick={() => setModalIsOpen(true)} />
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <CloseIcon
                  onClick={() => setModalIsOpen(false)}
                  sx={{ color: "white", cursor: "pointer" }}
                />
                <div style={{ color: "#1d9cf0" }}>Drafts</div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "20px",
                  height: "440px",
                  overflowY: "scroll",
                }}
              >
                <div style={{ width: "10%" }}>
                  <Avatar src={avatar} />
                </div>
                <div style={{ width: "90%" }}>
                  <input
                    placeholder="What is happening?"
                    ref={inputRef}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    style={{
                      width: "100%",
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                      fontSize: "18px",
                      outline: "none",
                      height: "40px",
                      marginBottom: "20px",
                    }}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  />
                  {selectedImage && (
                    <div>
                      <img
                        className="inpChoose"
                        src={selectedImage}
                        alt="Uploaded"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  width: "100%",
                }}
              >
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileSelect}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <ImageIcon
                    sx={{ color: "#1d9cf0", cursor: "pointer" }}
                    onClick={() => fileInputRef.current.click()}
                  />
                  <PlaceIcon sx={{ color: "#1d9cf0" }} />
                  <DateRangeIcon sx={{ color: "#1d9cf0" }} />
                  <TagIcon
                    sx={{ color: "#1d9cf0" }}
                    onClick={handleHashClick}
                  />
                </div>
                <div>
                  <button onClick={handleCLick} className="buttonPost">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <div className="account">
          <div style={{ display: "flex" }}>
            <Avatar
              sx={{ border: "2px solid green" }}
              src="/static/images/avatar/2.jpg"
            />
            <div
              className="acc_info"
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <div className="acc_name">{oneUser.username}</div>
              <div className="acc_email">{oneUser.email}</div>
            </div>
          </div>
          <div className="adap" style={{ display: "flex" }}>
            <MoreHorizIcon
              sx={{ color: "white", display: "flex", justifyContent: "end" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
