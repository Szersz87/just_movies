import { useState, useEffect } from "react";

const useMoviesLocalStorage = (key, initialValue = []) => {
  const [movies, setMovies] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedState = JSON.stringify(movies);
      window.localStorage.setItem(key, serializedState);
    } catch (error) {
      console.log(error);
    }
  }, [movies, key]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return [movies, setMovies, addMovie];
};

export default useMoviesLocalStorage;
