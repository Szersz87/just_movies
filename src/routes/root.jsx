import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../app/components/menu/Header";
import HomePage from "../app/components/pages/HomePage";
import Series from "../app/components/pages/Series";
import Movies from "../app/components/pages/Movies";
import NewAndPopular from "../app/components/pages/NewAndPopular";
import MyList from "../app/components/pages/MyList";

export default function Root() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/newAndPopular" element={<NewAndPopular />} />
        <Route path="/MyList" element={<MyList />} />
      </Routes>
    </Router>
  );
}
