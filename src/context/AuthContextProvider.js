import React, { createContext, useContext, useReducer } from "react";
import { ACTION, API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const authContext = createContext();
export const useAuth = () => useContext(authContext);
const INIT_STATE = {
  user: {},
  existUser: {},
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION.SUCCESS_REGISTER:
      return { ...state, user: action.payload };
    case ACTION.GET_ERROR_REGISTRATION:
      return { ...state, existUser: action.payload };
  }
};
const AuthContextProvider = ({ children }) => {
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
  // !Registration
  const registrate = async (formaData) => {
    try {
      const res = await axios.post(`${API}/account/register/`, formaData);
      console.log(res);
      dispatch({
        type: ACTION.SUCCESS_REGISTER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response.data.email[0]);
      dispatch({
        type: ACTION.GET_ERROR_REGISTRATION,
        payload: error.response.data.email[0], // эта ошибка
      });
    }
  };
  // ! activate Account
  const activateAccount = async (formaData) => {
    try {
      const res = await axios.post(`${API}/account/active/`, formaData);
      console.log(res);
    } catch (error) {
      console.log(error.response.data.email[0]);
      dispatch({
        type: ACTION.GET_ERROR_REGISTRATION,
        payload: error.response.data.email[0], // эта ошибка
      });
    }
  };

  //   ! Login
  const Login = async (formaData) => {
    try {
      const res = await axios.post(`${API}/account/login/`, formaData);
      console.log(res);
      dispatch({
        type: ACTION.SUCCESS_REGISTER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response.data.email[0]);
      dispatch({
        type: ACTION.GET_ERROR_REGISTRATION,
        payload: error.response.data.email[0], // эта ошибка
      });
    }
  };

  //   ! Logout

  const values = {
    registrate,
    existUser: state.existUser,
    activateAccount,
    user: state.user,
    Login,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
