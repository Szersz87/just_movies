import React from 'react';
import Layout from './components/layout'
// import HomePage from './components/homePage';
import Series from './components/series';
import Movies from './components/movies';
import NewAndPopular from './components/newAndPopular';
import MyList from './components/myList';
import { BrowserRouter, Routes, Route } from "react-router-dom";




export default function Menu ()  {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<homePage />} />
      <Route path="/series" element={<Series />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/newAndPopular" element={<NewAndPopular />} />
      <Route path="/MyList" element={<MyList />} />
    </Route>
  </Routes>
</BrowserRouter>
  )
};


