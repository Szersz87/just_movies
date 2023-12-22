import React from "react";
import Root from "../routes/Root";
import ReactModal from "react-modal";
import "./Main.scss";



ReactModal.setAppElement("#root");

const App = () => {
  return <Root />;
};

export default App;
