import React from "react";
import MainRoutes from "./routes/MainRoutes";
import SideBar from "./components/SideBar/SideBar";
import LeftBar from "./components/LeftBar/LeftBar";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import { useAuth } from "./context/AuthContextProvider";

export default function App() {
  const {user} = useAuth()
  console.log(user);
  return (
    <>
     {user.length > 2 ? (<div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "55%", display: "flex" }}>
        <div className="mainPositon" style={{ width: "18%" }}>
          <SideBar />
        </div>
        <div
          style={{                       
            width: "80%",
          }}
        >
          <MainRoutes />
        </div>
      </div>
      <div>
        <LeftBar />
      </div>

    </div>):(
      <Login />

    )}

    {/* <div>
      <Registration />  
     </div> */}
    </>
   
  );
}
