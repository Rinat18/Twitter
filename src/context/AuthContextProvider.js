import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { ACTION, API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
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
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  // !Registration
  const registrate = async (formaData) => {
    try {
      const res = await axios.post(`${API}/account/register/`, formaData);
      dispatch({
        type: ACTION.SUCCESS_REGISTER,
        payload: res.data,  
      });
      localStorage.setItem('userRegistration', JSON.stringify(res.data))
      alert("вам на почту отправили код для аквации!")
    } catch (error) {
      console.log(error);
      dispatch({
        type: ACTION.GET_ERROR_REGISTRATION,
        payload: error.response.data,
      });
    }
  };
  // ! activate Account
  const activateAccount = async (formaData, userName) => {
    try {
      const {data} = await axios.post(`${API}/account/activate/`, formaData);
      localStorage.setItem("userName", JSON.stringify(userName))
      alert("Ваш аккаунт успешно активирован можете войти в аккаунт!")
    } catch (error) {
      dispatch({
        type: ACTION.GET_ERROR_REGISTRATION,
        payload: error.response.data,
      });
    }
  };

  //   ! Login
  const Login = async (formaData, email, name) => {
    try {
      const {data} = await axios.post(`${API}/account/login/`, formaData);
        localStorage.setItem("tokens", JSON.stringify(data));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("name", JSON.stringify(name));
        setCurrentUser(email);
        navigate("/");
      dispatch({
        type: ACTION.SUCCESS_REGISTER,
        payload: email,
      });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: ACTION.GET_ERROR_REGISTRATION,
        payload: error.response.data 
      });
    }finally {
      // setLoader(false);
    }
  };

  //! checkAuth
  const checkAuth = async () => {
      try {
        const tokens = JSON.parse(localStorage.getItem("tokens"));
        const { data } = await axios.post(`${API}/account/refresh/`, {
          refresh: tokens.refresh,
        });
        localStorage.setItem(
          "tokens",
          JSON.stringify({ access: data, refresh: tokens.refresh })
        );
        const email = JSON.parse(localStorage.getItem("email"));
        setCurrentUser(email);
      } catch (error) {
        console.log(error);
      }
  };

  const checkUser = async() => {
    const check = JSON.parse(localStorage.getItem("tokens"))
    const ussser = JSON.parse(localStorage.getItem("email"))
    if(check){
      dispatch({
        type: ACTION.SUCCESS_REGISTER,
        payload: ussser,  
      });
    }
  }
  //   ! Logout
  const LogOut = async () => {
    try{
      // await axios.post(`${API}/account/logout/`)
      localStorage.removeItem("tokens");
      localStorage.removeItem("email");
      setCurrentUser(null);
    }catch (error){
      console.log(error);
    }
    
  }
  // LogOut()
  // ! GET USER 

  const getUser = async() => {
    try{

    }catch{

    }
  }


  const values = {
    registrate,
    existUser: state.existUser,
    activateAccount,
    user: state.user,
    Login,
    checkAuth,
    currentUser,
    checkUser,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
