import { useEffect, useState } from "react";

function useMovies(genre, getRandom) {
  const [movies, setMovies] = useState([]);

  const fetchMoviesData = () => {
    let apiUrl = "https://itunes.apple.com/us/rss/topmovies/limit=50/json";
    if (genre) {
      apiUrl =
        "https://itunes.apple.com/us/rss/topmovies/limit=50/genre=${genre}/json";
    }

    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.feed.entry);
      });
  };

  const getRandomMovies = (count) => {
    const shuffledMovies = [...movies].sort(() => 0.5 - Math.random());
    return shuffledMovies.slice(0, count);
  };

  useEffect(() => {
    fetchMoviesData();
  }, [genre]);

  return { movies, getRandomMovies: getRandom ? getRandomMovies : null };
}

export default useMovies;
