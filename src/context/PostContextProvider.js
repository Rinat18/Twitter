import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ACTION, API, getConfig } from "../helpers/const";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const postContext = createContext();
export const usePorduct = () => useContext(postContext);
const INIT_STATE = {
  categories: [],
  posts: [],
  onePost: {},
  like: [],
  comments: [],
  messages: [],
  translateComment: [],
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case ACTION.GET_POSTS:
      return { ...state, posts: action.payload };
    case ACTION.LIKE_POST:
      return { ...state, like: action.payload };
    case ACTION.GET_ONE_POST:
      return { ...state, onePost: action.payload };
    case ACTION.GET_COMMENTS:
      return { ...state, comments: action.payload };
    case ACTION.GET_MESSAGES:
      return { ...state, messages: action.payload };
    case ACTION.TRANSLATE_COMMENTS:
      return { ...state, translateComment: action.payload };
    default:
      return state;
  }
};
const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();


 // ! GET CATEGORIES
  async function getCategories() {
    try {
      const { data } = await axios(`${API}/posts/hashtags/`);
      dispatch({
        type: ACTION.GET_CATEGORIES,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }
  // ! ADD CATEGORIES
  async function addCategory(formData) {
    try {
      const res = await axios.post(
        `${API}/posts/hashtags/`,
        formData,
        getConfig()
      );
      console.log(res);
    } catch (error) {
      console.error(error.response.data);
    }
  }
  // !ADD POST
    async function addPost(formData) {
      try {
        const res = await axios.post(
          `${API}/posts/posts/add/`,
          formData,
          getConfig()
        );
        console.log(res);
        getPosts();
      } catch (error) {
        console.error(error);
      }
    }
  // ! GET POSTS
    async function getPosts() {
      try {
        const {data} = await axios(`${API}/posts/posts/`, getConfig());
        console.log(data);
        dispatch({ type: ACTION.GET_POSTS, payload: data });
      } catch (error) {
        console.error(error);
      }
    }
   // ! DELETE POST
   async function deletePost(id) {
    try {
      await axios.delete(`${API}/posts/posts/${id}/`, getConfig());
      getPosts();
    } catch (error) {
      console.error(error);
    }
  }
  // ! LIKE POST
  const likePost = async (formData) => {
    try {
      const { data } = await axios.post(
        `${API}/posts/likes/toggle/`,
        formData,
        getConfig()
      );
      console.log(data);
      dispatch({
        type: ACTION.LIKE_POST,
        payload: data,
      });
      console.log("Post liked:", data);
    } catch (error) {
      console.error(error);
    }
  };
  // ! UNLIKE POST
  const unLikePost = async (formData) => {
    try {
      const { data } = await axios.delete(
        `${API}/posts/likes/toggle/`,
        formData,
        getConfig()
      );
      dispatch({
        type: ACTION.LIKE_POST,
        payload: data,
      });
      console.log(data);
      console.log("Post unliked:", data);
    } catch (error) {
      console.error(error);
    }
  };
  // ! GET ONE POST
   async function getOnePost(id) {
    try {
      const { data } = await axios(`${API}/posts/posts/${id}/`, getConfig());
      dispatch({
        type: ACTION.GET_ONE_POST,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }
  // ! ADD COMMENTS
  async function addComment(formData) {
    try {
      const res = await axios.post(
        `${API}/posts/comments/add/`,
        formData,
        getConfig()
      );
      window.location.reload();
      console.log(res);
      getComments();
    } catch (error) {
      console.error(error);
    }
  }
  // ! GET COMMENTS
  async function getComments(id) {
    try {
      const { data } = await axios(
        `${API}/posts/posts/${id}/comments/`,
        getConfig()
      );
      dispatch({ type: ACTION.GET_COMMENTS, payload: data });
    } catch (error) {
      console.error(error);
    }
  }
  //! TRANSLATE COMMENT
  async function translateComments(id) {
    try {
      const res = await axios(
        `${API}/posts/posts/comments/${id}/translate/`,
        getConfig()
      );
      dispatch({ type: ACTION.TRANSLATE_COMMENTS, payload: res.data });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  // ! DELETE COMMENT 
  async function deleteComments(id) {
    try {
      await axios.delete(`${API}/posts/comments/${id}`, getConfig());
      getComments();
    } catch (error) {
      console.error(error);
    }
  }
  const values = {
    getCategories,
    categories: state.categories,
    addCategory,
    addPost,
    getPosts,
    posts: state.posts,
    deletePost,
    likePost,
    like: state.like,
    getOnePost,
    onePost: state.onePost,
    addComment,
    comments: state.comments,
    getComments,
    deleteComments,
    translateComments,
    translateComment: state.translateComment,
    unLikePost,
  };
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};

export default PostContextProvider;
