import React from "react";
import MainRoutes from "./routes/MainRoutes";
import SideBar from "./components/SideBar/SideBar";
import LeftBar from "./components/LeftBar/LeftBar";
import Login from "./components/auth/Login";

export default function App() {
  return (
    <div
      className="appMain"
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

    // <div>
    //   <Login />
    // </div>
  );
}
