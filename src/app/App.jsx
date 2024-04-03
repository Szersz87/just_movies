import React from "react";
import Root from "../routes/Root";
import ReactModal from "react-modal";
import "./Main.scss";
import { MoviesContextProvider } from "../context/MoviesContext";



ReactModal.setAppElement("#root");

const App = () => {
  return (
  <MoviesContextProvider>
  <Root />
  </MoviesContextProvider>
  );
};

export default App;
