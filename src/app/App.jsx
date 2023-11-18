import React from "react";
import Root from "../routes/Root";
import ReactModal from "react-modal";
import "./App.scss";
import "./components/hero/Hero.scss";
import "./components/pages/Pages.scss";
import "./components/pages/FavouriteList.scss";
import "./components/pages/MovieDetails.scss";
import "./components/pages/Hamburger.scss";
import "./components/pages/RandomMovies.scss";


ReactModal.setAppElement("#root");

const App = () => {
  return <Root />;
};

export default App;
