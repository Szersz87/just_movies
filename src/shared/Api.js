import { useEffect, useState, useMemo } from "react";

function useMovies(genre, enableRandomization) {
  const [movies, setMovies] = useState([]);

  const fetchMoviesData = async () => {
    const apiUrl = genre
      ? `https://itunes.apple.com/us/rss/topmovies/limit=80/genre=${genre}/json`
      : "https://itunes.apple.com/us/rss/topmovies/limit=80/json";

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      console.log("Fetched data from API:", data);
      const moviesWithLikedFlag = Array.isArray(data.feed.entry)
      ? data.feed.entry.map((movie) => {
        console.log("Processing movie from API:", movie);

        return {
        ...movie,
        isLiked: false,
        };
      })
      : [];

      console.log("Movies with liked flag:", moviesWithLikedFlag);

      setMovies(moviesWithLikedFlag);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, [genre]);

  const getRandomMovies = useMemo(() => {
    if (!enableRandomization) return null;

    return (count) => {
      const shuffledMovies = [...movies].sort(() => 0.5 - Math.random());
      return shuffledMovies.slice(0, count);
    };
  }, [movies, enableRandomization]);

  return { movies, getRandomMovies };
}

export default useMovies;
