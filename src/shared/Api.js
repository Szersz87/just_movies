import { useEffect, useState } from "react";

function useMovies() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesData = () => {
    fetch("https://itunes.apple.com/us/rss/topmovies/limit=20/json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.feed.entry);
      });
  };
  useEffect(() => {
    fetchMoviesData();
  }, []);
  return movies;
}

export default useMovies;