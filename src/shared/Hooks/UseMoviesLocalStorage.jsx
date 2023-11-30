import { useState, useEffect } from "react";
import { toggleMovie } from "./MovieActionsHelper";

const useMoviesLocalStorage = (key, initialValue = []) => {
  const [movies, setMovies] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedState = JSON.stringify(movies);
      window.localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error(error);
    }
  }, [movies, key]);

  return [movies, (movie) => toggleMovie(movies, setMovies, movie)];
};

export default useMoviesLocalStorage;
