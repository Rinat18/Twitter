import React from "react";
import MainRoutes from "./routes/MainRoutes";
import SideBar from "./components/SideBar/SideBar";
import LeftBar from "./components/LeftBar/LeftBar";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import { useAuth } from "./context/AuthContextProvider";

export default function App() {
  const { user } = useAuth();
  console.log(user);

  // Проверяем, существует ли user, прежде чем пытаться получить его длину
  const isUserLoggedIn = user && user.length > 2;

  return (
    <>
      {isUserLoggedIn && isUserLoggedIn ? (
        <div
          style={{
            width: "80%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <div className="adaptiv">
            <SideBar />
          </div>
          <div className="mainHomePage">
            <MainRoutes />
          </div>
          <div className="leftBar">
            <LeftBar />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
