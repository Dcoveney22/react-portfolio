import Header from "../NavigationBar/Header2";
// import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import React from "react";

export default function Root() {
  return (
    <>
      <Header />
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}
