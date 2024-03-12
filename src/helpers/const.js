export const API = "http://34.68.121.149";
export const email = JSON.parse(localStorage.getItem("email"));
export const tokens = JSON.parse(localStorage.getItem("tokens"));
export const avatar = JSON.parse(localStorage.getItem("avatar"));
export const bio = JSON.parse(localStorage.getItem("bio"));
export const link = JSON.parse(localStorage.getItem("link"));
export const name = JSON.parse(localStorage.getItem("username"));

export const ACTION = {
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_POSTS: "GET_POSTS",
  GET_USERS: "GET_USERS",
  GET_ONE_POST: "GET_ONE_POST",
  GET_COMMENTS: "GET_COMMENTS",
  GET_ONE_USER: "GET_ONE_USER",
  GET_MESSAGES: "GET_MESSAGES",
  TRANSLATE_COMMENTS: "TRANSLATE_COMMENTS",
};
export const getConfig = () => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const Authorization = `Bearer ${tokens.access}`;
  const config = {
    headers: { Authorization },
  };
  return config;
};