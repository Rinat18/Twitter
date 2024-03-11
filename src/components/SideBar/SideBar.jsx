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
import { usePorduct } from "../../context/PostContextProvider";
import { useAuth } from "../../context/AuthContextProvider";
import { AddCircle, Person } from "@mui/icons-material";

export default function SideBar() {
  const naviagte = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const inputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef(null);
  const { createPost } = usePorduct();
  const { user, checkAuth, checkUser } = useAuth();
  console.log(user);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };
  useEffect(() => {
    if (modalIsOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [modalIsOpen]);

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
      checkUser();
    }
  }, []);
  // ! ADD POST
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(0);
  const [subCategory, setSubCategory] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState(imageUrl);
  const handleCLick = () => {
    const newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("category", category);
    newProduct.append("subCategory", subCategory);
    newProduct.append("price", price);
    newProduct.append("description", description);
    createPost(newProduct);
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
            onClick={() => naviagte("/explore")}
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
            onClick={() => naviagte("/notifications")}
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
            onClick={() => naviagte("/message")}
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
                    onChange={(e) => setTitle(e.target.value)}
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
                  {imageUrl && (
                    <img className="inpChoose" src={imageUrl} alt="Uploaded" />
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  position: "absolute",
                  bottom: "0px",
                  width: "100%",
                }}
              >
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                  <ImageIcon
                    sx={{ color: "#1d9cf0", cursor: "pointer" }}
                    onClick={() => fileInputRef.current.click()}
                  />
                  <PlaceIcon sx={{ color: "#1d9cf0" }} />
                  <DateRangeIcon sx={{ color: "#1d9cf0" }} />
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
              <div className="acc_name">Ринат</div>
              <div className="acc_email">@Rinat1111</div>
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
