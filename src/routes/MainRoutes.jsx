import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Profile from "../components/profile/Profile";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";
import Explore from "../components/explore/Explore";
import Notifications from "../components/notifications/Notifications";
import Message from "../components/message/Message";
import { useAuth } from "../context/AuthContextProvider";

import Favorites from "../components/favorites/Favorites";

import Settings from "../components/settings/Settings";

export default function MainRoutes() {
  const PUBLIC_ROUTES = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/notifications",
      element: <Notifications />,
    },
    {
      path: "/message",
      element: <Message />,
    },

    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
  ];

  const NOT_ROUTES = [];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
