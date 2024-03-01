import { useState } from "react";

const useMoviesLocalStorage = () => {
  const [movies, setMovies] = useState(() => {
    try {
      const items = window.localStorage.getItem("movies");
      return items ? JSON.parse(items) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  return [movies, setMovies];
};

const toggleMovie = (movie) => {
  const items = localStorage.getItem("movies");
  console.log("items", items);

  if (items != undefined) {
    const movies = JSON.parse(items);
    movies.push(movie);
    console.log(movies);

    // return movies.map((item) => {
    //   return item.title === movie.title
    //     ? { ...item, isLiked: !item.isLiked }
    //     : item;
    // });
  } else {
    const serializedState = JSON.stringify([movie]);
    localStorage.setItem("movies", serializedState);
    // return [movie];
  }
};

const useAddToLocalStorage = (movie) => {
  // console.log(toggleMovie(movie))
  // console.log(movie)
  const updatedMovies = toggleMovie(movie);
  console.log(updatedMovies);

  // try {
  //   const serializedState = JSON.stringify(updatedMovies);
  //   window.localStorage.setItem("movies", serializedState);
  // } catch (error) {
  //   console.error(error);
  // }
};

export { useMoviesLocalStorage, useAddToLocalStorage, toggleMovie };
