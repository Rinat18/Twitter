import { ArrowBack, CalendarMonth } from "@mui/icons-material";
import { Avatar, colors } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./profile.scss";
import avatarProf from "../../assets/Фото 3-4-24, 12.59 — копия.jpg";
import { avatar, bio, email, link, name } from "../../helpers/const";
import SideBar from "../../components/SideBar/SideBar";
import LeftBar from "../../components/LeftBar/LeftBar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import { usePorduct } from "../../context/PostContextProvider";
import Post from "../post/Post";

const Profile = () => {
  // ! IMPORTS
  const { editUser, oneUser, getOneUser, users, getUsers } = useAuth();
  const { getPosts, posts } = usePorduct();

  // ! STATES
  const [followersCount, setFollowersCount] = useState(0);
  const [following, setFollowing] = useState(0);
  const [time, setTime] = useState("");
  const [modalWindow, setModalWindow] = useState(false);

  const [isBio, setIsBio] = useState("");
  const [isLink, setIsLink] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  // ! HOOKS
  useEffect(() => {
    getPosts();
  }, []);
  if (oneUser) {
    let time = oneUser.last_online;
    console.log(time);
  }

  useEffect(() => {
    if (oneUser) {
      setTime(oneUser.last_online);
    }
  }, [oneUser]);
  useEffect(() => {
    getOneUser();
  }, []);

  // ! FUNCTIONS

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = reader.result;
        setProfileImage(fileData);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleEditUser() {
    if (!isBio.trim()) return;
    if (!isLink.startsWith("https://")) return;
    let formData = new FormData();
    formData.append("avatar", fileInputRef.current.files[0]);
    localStorage.setItem("avatar", JSON.stringify(profileImage));
    formData.append("biography", isBio);
    localStorage.setItem("bio", JSON.stringify(isBio));
    formData.append("link", isLink);
    localStorage.setItem("link", JSON.stringify(isLink));
    editUser(formData);
  }

  const navigate = useNavigate();
  return (
    <>
      <div className="profilePage">
        <div className="profilePage__container">
          <div className="Sidebar">
            <SideBar />
          </div>
          <div className="profileContainer">
            <div className="profileNavbar">
              <div className="profileNavbar__name">
                <ArrowBack
                  sx={{ color: "white", width: "60px", height: "40px" }}
                  onClick={() => navigate("/")}
                />
                <div className="profileNavbar-name__post">
                  <span>{oneUser.username}</span>
                  <p style={{ textOverflow: "unset" }}>0 post</p>
                </div>
              </div>
            </div>
            <div className="profilePhoto">
              {/* <img src={avatarBg} alt="" /> */}
            </div>
            <div className="profileTitle">
              <div className="profileTitle__PhotoAvatar">
                <Avatar src="/static/images/avatar/2.jpg" />
                <p
                  onClick={() => setModalWindow(true)}
                  style={{ color: "white" }}
                >
                  Edit Profile
                </p>
              </div>
              {modalWindow && (
                <div className="profile-edit-overlay">
                  <div className="user-profile-form">
                    <h2 className="form-header">Edit profile</h2>
                    <div className="form-section">
                      <div class="drop-container" id="dropContainer">
                        <label for="fileInput"></label>
                        <input
                          type="file"
                          id="fileInput"
                          accept="image/*"
                          multiple
                          ref={fileInputRef}
                          onChange={handleFileChange}
                        />
                      </div>

                      <label className="form-label">
                        <span className="label-text">Name</span>
                        <input
                          style={{ color: "#fff" }}
                          type="text"
                          className="form-input"
                        />
                      </label>
                    </div>
                    <div className="form-section">
                      <label className="form-label">
                        <span className="label-text">Bio</span>
                        <textarea
                          style={{ color: "#fff" }}
                          className="form-textarea"
                          placeholder="+ Добавить биографию"
                          defaultValue={bio}
                          onChange={(e) => setIsBio(e.target.value)}
                        ></textarea>
                      </label>
                    </div>
                    {/* <div className="form-section">
                      <label className="form-label">
                        <span className="label-text">Location</span>
                        <input type="text" className="form-input" />
                      </label>
                    </div> */}
                    <div className="form-section">
                      <label className="form-label">
                        <span className="label-text">Website</span>
                        <textarea
                          className="form-input"
                          style={{ height: "65px", color: "#fff" }}
                          type="text"
                          placeholder="+ Добавить ссылку"
                          defaultValue={link}
                          onChange={(e) => setIsLink(e.target.value)}
                        />
                      </label>
                    </div>
                    <div className="form-actions">
                      <button
                        className="save-button"
                        onClick={() => handleEditUser()}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="profileTitle__about">
                <h3>{oneUser.username}</h3>
                <p>{oneUser.email}</p>
                <div className="profileTitle-about__data">
                  <CalendarMonth sx={{ color: "gray" }} />
                  {oneUser && <span>last Online Day {time}</span>}
                </div>
                <div className="pofileTitle-about__followers">
                  <p>{following} Following</p>
                  <p>{followersCount} Followers</p>
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
            {posts
              .filter((elem) => elem.creator.email === email)
              .map((elem) => (
                <Post elem={elem} />
              ))}
            <div className="newsTemp">
              <h2>Who to Follow </h2>
              <div className="newsTemp__all">
                <div>
                  <div className="newsTemp__users">
                    <Avatar sx={{ width: "43px", height: "43px" }} />
                    <div className="newsTemp-users__nickName">
                      <span>Bill Gates</span>
                      <span>@Bill Gates</span>
                    </div>
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
          </div>
          <div className="leftBar">
            <LeftBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
