import React from "react";

export default function MyList() {
  const myList = JSON.parse(localStorage.getItem("myList")) || [];

  return (
    <div className="Container">
      <h2>My List</h2>
      <div className="movieList">
        {myList.map((movie, index) => (
          <div key={index} className="movieTile">
            {movie && movie["im:image"] && movie["im:image"][2] && (
            <img
              src={movie["im:image"][2].label}
              alt={movie["im:name"].label}
            />
             )}
          </div>
        ))}
      </div>
    </div>
  );
}
