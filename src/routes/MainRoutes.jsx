import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Profile from "../components/profile/Profile";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";

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
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
