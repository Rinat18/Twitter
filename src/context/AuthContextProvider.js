import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
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
  const [curentUserName, setCurentUserName] = useState("");
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
  const activateAccount = async (formaData, name) => {
    try {
      const { data } = await axios.post(`${API}/account/activate/`, formaData);
      localStorage.setItem("name", JSON.stringify(name));
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
  const Login = async (formaData, email, name) => {
    try {
      const { data } = await axios.post(`${API}/account/login/`, formaData);
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("name", JSON.stringify(name));
      setCurentUserName(name);
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
        payload: error.response.data,
      });
    } finally {
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
      const name = JSON.parse(localStorage.getItem("name"));
      setCurrentUser(email);
      setCurentUserName(name);
    } catch (error) {
      console.log(error);
    }
  };
  const checkUser = async () => {
    const check = JSON.parse(localStorage.getItem("tokens"));
    const ussser = JSON.parse(localStorage.getItem("email"));
    // const name = JSON.parse(localStorage.getItem("name"));
    if (check) {
      dispatch({
        type: ACTION.SUCCESS_REGISTER,
        payload: ussser,
      });
    }
  };
  //   ! Logout
  const LogOut = async () => {
    try {
      // await axios.post(`${API}/account/logout/`)
      localStorage.removeItem("tokens");
      localStorage.removeItem("email");
      setCurrentUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  // LogOut()
  // ! GET USER

  const getUser = async () => {
    try {
    } catch {}
  };

  const values = {
    registrate,
    existUser: state.existUser,
    activateAccount,
    user: state.user,
    Login,
    LogOut,
    checkAuth,
    currentUser,
    checkUser,
    curentUserName,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
