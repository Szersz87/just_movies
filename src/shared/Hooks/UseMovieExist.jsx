import { useState, useEffect } from "react";

const useMovieExist = (movieTitle) => {
  const [movieExists, setMovieExists] = useState(false);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    const exists = storedMovies.some((movie) => movie.title === movieTitle);
    setMovieExists(exists);
  }, [movieTitle]);

  return movieExists;
};

export default useMovieExist;
