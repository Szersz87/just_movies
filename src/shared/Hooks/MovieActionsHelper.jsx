const addMovie = (setMovies, movie) => {
  const movieToAdd = {
    title: movie["im:name"].label,
    imageUrl: movie?.["im:image"]?.[2]?.label,
    description: movie?.summary?.label,
    href: movie?.link?.[1]?.attributes?.href,
    isLiked: true,
  };

  console.log("Adding movie:", movieToAdd);
  setMovies((prev) => [...prev, movieToAdd]);
};

const removeMovie = (setMovies, title) => {
  console.log("Removing movie with title:", title);
  setMovies((prev) => prev.filter((item) => item.title !== title));
};

const toggleMovie = (setMovies, movie) => {
  const movieTitle = movie["im:name"].label;

  setMovies((prev) => {
    const existingMovie = prev.find((item) => item.title === movieTitle);

    if (existingMovie) {
      if (existingMovie.isLiked) {
        removeMovie(setMovies, movieTitle);
      } else {
        addMovie(setMovies, movie);
      }
    }

    return prev.map((item) => {
      if (item.title === movieTitle) {
        return { ...item, isLiked: !item.isLiked };
      }
      return item;
    });
  });
};

export { addMovie, removeMovie, toggleMovie };


  
  
