import PropTypes from "prop-types";
import React, { createContext } from "react";
import { useLocalStorage } from "../shared/Hooks/UseLocalStorage";

export const MoviesContext = createContext({
  savedMovies: [],
  toggleMovie: () => {},
});

export const MoviesContextProvider = (props) => {
  const [savedMovies, setSavedMovies] = useLocalStorage("movies", []);

  const toggleMovie = (movie) => {
    if (savedMovies.length > 0) {
      const findMovie = savedMovies.find(
        (item) => item.title.label === movie.title.label,
      );
      const newMovies =
        findMovie !== undefined
          ? savedMovies.filter((m) => m.title.label !== movie.title.label)
          : [...savedMovies, { ...movie, isLiked: true }];
      setSavedMovies(() => [...newMovies]);
    } else {
      const newMovies = [{ ...movie, isLiked: true }];
      setSavedMovies(() => [...newMovies]);
    }
  };

  const providerValue = {
    savedMovies,
    toggleMovie,
  };
  return (
    <MoviesContext.Provider value={providerValue}>
      {props.children}
    </MoviesContext.Provider>
  );
};

MoviesContextProvider.propTypes = {
  children: PropTypes.node,
};