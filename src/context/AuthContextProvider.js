import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { ACTION, API, getConfig } from "../helpers/const";

import { useNavigate } from "react-router-dom";
import axios from "axios";
const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const INIT_STATE = { users: [], oneUser: {} };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTION.GET_USERS:
        return { ...state, users: action.payload };
      case ACTION.GET_ONE_USER:
        return { ...state, oneUser: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);


  const [error, setError] = useState(false);

  const navigate = useNavigate();

  // !Registration
  const registrate = async (formaData) => {
    try {

      const { data } = await axios.post(`${API}/account/register/`, formaData);
      localStorage.setItem("username", JSON.stringify(data));
      alert("вам на почту отправили код для аквации!");

    } catch (error) {
      console.log(error);
      dispatch({
        type: ACTION.GET_ERROR_REGISTRATION,
        payload: error.response.data,
      });
    }
  };
  // ! activate Account

  const activateAccount = async (formaData) => {
    try {
      const { data } = await axios.post(`${API}/account/activate/`, formaData);
      alert("Ваш аккаунт успешно активирован можете войти в аккаунт!");

    } catch (error) {
      dispatch({
        type: ACTION.GET_ERROR_REGISTRATION,
        payload: error.response.data,
      });
    }
  };

  //   ! Login
  const Login = async (formaData, email) => {
    try {
      const { data } = await axios.post(`${API}/account/login/`, formaData);

      window.location.reload();
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("email", JSON.stringify(email));
      navigate("/");
      console.log(data);

    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: ACTION.GET_ERROR_REGISTRATION,
        payload: error.response.data,
      });
    } finally {

    }
  };

  //! RESET PASSWORD

  async function handleResetPassword() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      if (!tokens || !tokens.access) {
        throw new Error("No access token available");
      }
      const config = {
        headers: { Authorization: `Bearer ${tokens.access}` },
      };
      await axios.post(`${API}/account/reset_password/`, {}, config);
    } catch (error) {
      console.error(error);
    }
  }

  //! check Auth

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


    } catch (error) {
      console.log(error);
    }
  };


  // ! check USER

  const checkUser = async () => {
    const check = JSON.parse(localStorage.getItem("tokens"));
    const ussser = JSON.parse(localStorage.getItem("userRegistration"));

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

      const tokens = JSON.parse(localStorage.getItem("tokens"));
      if (!tokens || !tokens.access) {
        throw new Error("No access token available");
      }
      const config = {
        headers: { Authorization: `Bearer ${tokens.access}` },
      };
      const configData = {
        refresh: tokens.refresh,
      };
      await axios.post(`${API}/account/logout/`, configData, config);
      localStorage.removeItem("tokens");
      localStorage.removeItem("email");
      localStorage.removeItem("avatar");
      localStorage.removeItem("link");
      localStorage.removeItem("bio");
      localStorage.removeItem("username");
      window.location.reload();
      navigate("/login");

    } catch (error) {
      console.log(error);
    }
  };


  // ! GET USERS
  async function getUsers() {
    try {
      let { data } = await axios(`${API}/account/users/`, getConfig());
      dispatch({ type: ACTION.GET_USERS, payload: data });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  // ! GET CURRENT USER
  async function getOneUser() {
    try {
      const id = JSON.parse(localStorage.getItem("username"));
      const { data } = await axios(
        `${API}/account/user_full/${id.id}/`,
        getConfig()
      );
      console.log(data);
      dispatch({ type: ACTION.GET_ONE_USER, payload: data });
    } catch (error) {
      console.error(error);
    }
  }

  // ! EDIT USER
  async function editUser(formData) {
    try {
      let res = await axios.put(
        `${API}/account/profile_update/`,
        formData,
        getConfig()
      );
      console.log(res);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  // ! SET PREMIUM
  async function addVerified() {
    try {
      const res = await axios.post(`${API}/account/user_vip/`, getConfig());
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  // ! GET SUBSCRIBES

  async function getSubscribers() {
    try {
      let res = await axios(`${API}/posts/subscriptions/`, getConfig());
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  //! TO SUBSCRIBE

  async function toSubscribe(id) {
    try {
      let res = await axios.post(
        `${API}/posts//subscriptions/${id}/`,
        getConfig()
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  // ! DELETE USER

  async function deleteUser() {
    try {
      const res = await axios.delete(
        `${API}/account/delete_user/`,
        getConfig()
      );
      window.location.reload();
      navigate("/login");
      localStorage.removeItem("tokens");
      localStorage.removeItem("email");
      localStorage.removeItem("username");
      localStorage.removeItem("avatar");
      localStorage.removeItem("bio");
      localStorage.removeItem("link");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }


  const values = {
    registrate,
    existUser: state.existUser,
    activateAccount,
    users: state.users,
    oneUser: state.oneUser,
    Login,
    LogOut,
    checkAuth,
    checkUser,

    deleteUser,
    toSubscribe,
    getSubscribers,
    addVerified,
    editUser,
    getOneUser,
    getUsers,
    LogOut,
    handleResetPassword,

  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
