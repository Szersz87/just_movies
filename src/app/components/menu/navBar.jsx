import React from "react";
import Layout from "../pages/layout";
import Series from "../pages/series";
import Movies from "../pages/movies";
import NewAndPopular from "../pages/newAndPopular";
import MyList from "../pages/myList";
import Images from "../../../shared/logo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function NavBar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<homePage />} />
          <Route path="/" element={<Images />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/newAndPopular" element={<NewAndPopular />} />
          <Route path="/MyList" element={<MyList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
