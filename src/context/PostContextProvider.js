import React, { createContext, useReducer } from "react";
import { ACTION } from "../helpers/const";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const postContext = createContext();
export const usePorduct = () => useContext(postContext);
const INIT_STATE = {
  posts: [],
  onePost: {},
  pages: 1,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION.GET_POSTS:
      return { ...state, posts: action.payload };
  }
};
const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  // ! Config
  const getConfig = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authourization = `Bearer ${tokens.access.access}`;
    const config = {
      headers: { Authourization },
    };
    return config;
  };
  // !Get
  const getPosts = async () => {
    try {
      const { data } = await axios(`${API}/posts`, getConfig());
      dispatch({
        type: ACTION.GET_POSTS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const values = {};
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};

export default PostContextProvider;
