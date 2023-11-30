const createMovieToAdd = (movie) => {
    return {
      title: movie["im:name"].label,
      imageUrl: movie["im:image"][2].label,
      description: movie.summary.label,
      href: movie.link[1].attributes.href,
    };
  };
  
  const addMovie = ( setMovies, movie) => {
    setMovies((prev) => [...prev, movie]);
  };
  
  const removeMovie = ( setMovies, id) => {
    setMovies((prev) => prev.filter((item) => item.title !== id));
  };
  
  const isMovieExist = (movies, movie) => {
    return movies.some((item) => item.title === movie.title);
  };
  
  const toggleMovie = (movies, setMovies, movie) => {
    const movieToAdd = createMovieToAdd(movie);
  
    if (isMovieExist(movies, movieToAdd)) {
      removeMovie( setMovies, movieToAdd.title);
    } else {
      addMovie( setMovies, movieToAdd);
    }
  };
  
  export { createMovieToAdd, addMovie, removeMovie, isMovieExist, toggleMovie };
  
  