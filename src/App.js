import React from "react";
import MainRoutes from "./routes/MainRoutes";
import SideBar from "./components/SideBar/SideBar";
import LeftBar from "./components/LeftBar/LeftBar";
import Login from "./components/auth/Login";

export default function App() {
  return (
    //   <div
    //     style={{
    //       width: "100%",
    //       display: "flex",
    //       justifyContent: "center",
    //       height: "100vh",
    //     }}
    //   >
    //     <div style={{ width: "55%", display: "flex" }}>
    //       <div className="mainPositon" style={{ width: "18%" }}>
    //         <SideBar />
    //       </div>
    //       <div
    //         style={{
    //           width: "80%",
    //         }}
    //       >
    //         <MainRoutes />
    //       </div>
    //     </div>
    //     <div>
    //       <LeftBar />
    //     </div>
    //   </div>

    <div>
      <Login />
    </div>
  );
}
