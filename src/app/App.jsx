import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import "./components/menu/header.scss";
import "./components/hero/hero.scss";
import Hero from "./components/hero/hero";
import Header from "./components/menu/header";

function App() {
  return (
    <>
      <div className="menu">
        <Header />
      </div>
      ;
      <div>
        <Hero />
      </div>
    </>
  );
}

export default App;
