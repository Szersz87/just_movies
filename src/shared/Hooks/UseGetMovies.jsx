import { useState, useEffect } from "react";

const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

const useGetMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = getFromLocalStorage("myList");

    setMovies(storedMovies);
  }, []);

  const setMoviesInLocalStorage = (newMovies) => {
    saveToLocalStorage("myList", newMovies);
    setMovies(newMovies);
  };

  return { movies, setMoviesInLocalStorage };
};

export default useGetMovies;
