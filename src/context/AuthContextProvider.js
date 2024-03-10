import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
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
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    if(currentUser){
      console.log(currentUser);
      dispatch({
        type: ACTION.SUCCESS_REGISTER,
        payload: currentUser,
      })
    }
  },[currentUser])
  const navigate = useNavigate();
  // !Registration
  const registrate = async (formaData) => {
    try {
      const res = await axios.post(`${API}/account/register/`, formaData);
      dispatch({
        type: ACTION.SUCCESS_REGISTER,
        payload: res.data,  
      });
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
      console.log(data);
    } catch (error) {
      console.log(error.response.data.email[0]);
      dispatch({
        type: ACTION.GET_ERROR_REGISTRATION,
        payload: error.response.data,
      });
    }
  };

  //   ! Login
  const Login = async (formaData, email) => {
    try {
      const {data} = await axios.post(`${API}/account/login/`, formaData);
        localStorage.setItem("tokens", JSON.stringify(data));
        localStorage.setItem("email", JSON.stringify(email));
        setCurrentUser(email);
        navigate("/");
      dispatch({
        type: ACTION.SUCCESS_REGISTER,
        payload: data,
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

  //   ! Logout
  const LogOut = async () => {
    try{
      localStorage.removeItem("tokens");
      localStorage.removeItem("email");
      setCurrentUser(null);
    }catch (error){
      console.log(error);
    }
    
  }


  const values = {
    registrate,
    existUser: state.existUser,
    activateAccount,
    user: state.user,
    Login,checkAuth,LogOut,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
