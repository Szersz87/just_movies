import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../app/components/menu/Header";
import HomePage from "../app/components/pages/HomePage";
import RandomMovies from "../app/components/pages/RandomMovies";
import MyList from "../app/components/pages/MyList";

export default function Root() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/just_movies" element={<HomePage />} />
        <Route path="/randomMovies" element={<RandomMovies />} />
        <Route path="/MyList" element={<MyList />} />
      </Routes>
    </Router>
  );
}
