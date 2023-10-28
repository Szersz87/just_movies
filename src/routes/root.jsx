import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../app/components/menu/Header";
import HomePage from "../app/components/pages/HomePage";
import RandomMovies from "../app/components/pages/RandomMovies";
import FavouriteList from "../app/components/pages/FavouriteList";

export default function Root() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/randomMovies" element={<RandomMovies />} />
        <Route path="/FavouriteList" element={<FavouriteList />} />
      </Routes>
    </Router>
  );
}
