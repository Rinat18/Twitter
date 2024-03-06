import React from "react";
import MainRoutes from "./routes/MainRoutes";
import SideBar from "./components/SideBar/SideBar";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "70%", display: "flex" }}>
        <div className="mainPositon" style={{ width: "20%" }}>
          <SideBar />
        </div>
        <div style={{ width: "80%" }}>
          <MainRoutes />
        </div>
      </div>
    </div>
  );
}
