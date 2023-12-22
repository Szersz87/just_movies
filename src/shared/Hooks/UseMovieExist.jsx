import { useState } from "react";

const useMoviesLocalStorage = () => {
  const [movies, setMovies] = useState([]);
  try {
    const items = window.localStorage.getItem("movies");
    setMovies(items ? JSON.parse(items) : []);
    console.log("Movies:", movies);
  } catch (error) {
    console.error(error);
  }
  return [movies];
};

const useAddToLocalStorage = (movie) => {
  toggleMovie(movie);
  try {
    const items = window.localStorage.getItem("movies");
    const movies = items ? JSON.parse(items) : [];
    movies.push(movie);
    const serializedState = JSON.stringify(movies);
    window.localStorage.setItem("movies", serializedState);
  } catch (error) {
    console.error(error);
  }
};

const toggleMovie = (movie) => {
  try {
    const items = window.localStorage.getItem("movies");
    const movies = items ? JSON.parse(items) : [];

    const updatedMovies = movies && movies.map((item) =>
      item.title === movie.title ? { ...item, isLiked: !item.isLiked } : item
    );

    const serializedState = JSON.stringify(updatedMovies);
    window.localStorage.setItem("movies", serializedState);

    return updatedMovies;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { useMoviesLocalStorage, useAddToLocalStorage, toggleMovie };