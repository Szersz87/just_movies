const createMovieToAdd = (movie) => {
  const title = movie?.["im:name"]?.label ?? "No Title";
  const imageUrl = movie?.["im:image"]?.[2]?.label ?? "No Image";
  const description = movie?.summary?.label ?? "No Description";
  const href = movie?.link?.[1]?.attributes?.href ?? "#";

  return {
    title,
    imageUrl,
    description,
    href,
    isLiked: true,
  };
};


const addMovie = (setMovies, movie) => {
  console.log(movie)
  const movieToAdd = createMovieToAdd(movie);
  setMovies((prev) => [...prev, movieToAdd]);
};


const removeMovie = (setMovies, title) => {
  setMovies((prev) => prev.filter((item) => item.title !== title));
};

const toggleMovie = (movies, setMovies, movie) => {
  const movieWithLikedFlag = createMovieToAdd({
    ...movie,
    isLiked: !movie.isLiked,
  });

  if (movie.isLiked) {
    removeMovie(setMovies, movieWithLikedFlag.title);
  } else {
    addMovie(setMovies, movieWithLikedFlag);
  }
};


export { createMovieToAdd, addMovie, removeMovie, toggleMovie };

  
  
