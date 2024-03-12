import React, { useEffect, useState } from "react";
import "../../pages/HomePage/HomePage.scss";
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
import { Avatar, GlobalStyles } from "@mui/material";
import { usePorduct } from "../../context/PostContextProvider";
import { name } from "../../helpers/const";
import { useNavigate } from "react-router-dom";

export default function Post({ elem }) {
  // ! IMPORTS

  const { deletePost, likePost, like, getComments, comments } = usePorduct();

  // ! STATES
  const [isLiked, setIsLiked] = useState(false);

  const postDate = new Date(elem.date_created);
  const formattedDate = postDate.toLocaleDateString();
  const formattedTime = postDate.toLocaleTimeString();

  // ! HOOKS
  useEffect(() => {
    getComments(elem.id);
  }, []);

  const navigate = useNavigate();

  // ! FUNCTIONS
  function handleLike() {
    let formData = new FormData();
    formData.append("post", elem.id);
    formData.append("user", name.username);
    likePost(formData);
  }

  console.log(elem);
  return (
    <div style={{ width: "100%" }}>
      <div className="usersPosts">
        <div className="usersPosts__userInfo">
          <div className="usersPosts__userInfo__inf">
            <Avatar src={elem.creator.avatar} className="avatar" />
            <p>{elem.creator.last_name}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10px",
              }}
            >
              <span>{elem.creator.email}</span>
              <div style={{ fontSize: "12px" }}>
                <span style={{ marginRight: "5px" }}>Date</span>
                {formattedDate}
              </div>
              <div style={{ fontSize: "12px" }}>
                <span style={{ marginRight: "5px" }}>Time</span>
                {formattedTime}
              </div>
            </div>
          </div>
          <MoreVert style={{ marginLeft: "40%" }} />
        </div>
        <img src={elem.image} className="usersPosts__post" />
        <div className="userPosts__containerComents">
          <div className="usersPosts__comments">
            <MapsUgc onClick={() => handleLike()} />
            <span>{comments.length}</span>
          </div>
          <div className="usersPosts__like">
            <Favorite onClick={() => handleLike()} />
            <span>0</span>
          </div>
          <div className="usersPosts__bookMarks">
            <TurnedIn />
          </div>
        </div>
      </div>
    </div>
  );
}
