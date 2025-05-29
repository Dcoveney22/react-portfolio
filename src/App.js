import "./App.css";
import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import MyBrands from "./components/MyBrands/MyBrands";
import MyProjects from "./components/MyProjects/MyProjects";
import MyExperience from "./components/MyExperience/MyExperience";
import ContactMe from "./components/ContactMe/ContactMe";

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
      <Route path="myprojects" element={<MyProjects />} />
      <Route path="myexperience" element={<MyExperience />} />
      <Route path="contactme" element={<ContactMe />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
