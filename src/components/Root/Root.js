// import Header2 from "../components/Header2";
// import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import React from "react";

export default function Root() {
  return (
    <>
      {/* <Header2 /> */}
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}
