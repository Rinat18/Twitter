import React, { createContext, useContext, useReducer } from "react";
import { ACTION, API } from "../helpers/const";
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
      const { data } = await axios(
        `${API}/product/product/`,
        getConfig()
      );
      console.log(data);
      dispatch({
        type: "GET_PRODUCTS",
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
    //! CREATE
    const createPost = async (newProduct) => {
      try {
        await axios.post(`${API}/product/product/`, newProduct, getConfig());
      } catch (error) {
        console.log(error);
      }
    };
  const values = {createPost,getConfig};
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};

export default PostContextProvider;
