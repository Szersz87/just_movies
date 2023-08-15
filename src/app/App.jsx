import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import "./components/menu/navBar.scss";
import "./components/header/header.scss";
import Header from "./components/header/header";
import NavBar from "./components/menu/navBar";

function App() {
  return (
    <>
      <div className="menu">
        <NavBar />
      </div>
      ;
      <div>
        <Header />
      </div>
    </>
  );
}

export default App;
