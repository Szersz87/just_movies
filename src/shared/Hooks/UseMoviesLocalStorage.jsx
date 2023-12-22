import { useState } from "react";

const useMoviesLocalStorage = () => {
  const [movies, setMovies] = useState();
  try {
    const items = window.localStorage.getItem("movies");
    setMovies(items ? JSON.parse(items) : []);
  } catch (error) {
    console.error(error);
    return [];
  }
  return [movies, setMovies];
};

const toggleMovie = (movie) => {
  const items = window.localStorage.getItem("movies");
  const movies = items ? JSON.parse(items) : [];
  return movies.map((item) =>
      item.title === movie.title ? { ...item, isLiked: !item.isLiked } : item
    )
  
};
const useAddToLocalStorage = (movie, toggleMovie) => {
  toggleMovie(movie)
  try {
    
    const serializedState = JSON.stringify(movie);
    window.localStorage.setItem("movies", serializedState);
  } catch (error) {
    console.error(error);
  }
};



export { useMoviesLocalStorage, useAddToLocalStorage, toggleMovie };
