import { useEffect, useState } from "react";

function useMovies(genre) {
  const [movies, setMovies] = useState([]);

  const fetchMoviesData = () => {
    fetch("https://itunes.apple.com/us/rss/topmovies/limit=50/genre=${genre}/json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.feed.entry);
      });
  };
  useEffect(() => {
    fetchMoviesData();
  }, [genre]);
  return movies;
}

export default useMovies;
