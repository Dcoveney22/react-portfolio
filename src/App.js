import "./App.css";
import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import MyBrands from "./components/MyBrands/MyBrands";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="home" element={<Home />} />
      <Route path="mybrands" element={<MyBrands />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
