import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../app/components/menu/header";
import HomePage from "../app/components/pages/homePage";
import Series from "../app/components/pages/series";
import Movies from "../app/components/pages/movies";
import NewAndPopular from "../app/components/pages/newAndPopular";
import MyList from "../app/components/pages/myList";

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
