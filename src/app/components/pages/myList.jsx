import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function MyList() {
  const myList = JSON.parse(localStorage.getItem("myList")) || [];
  return (
    <div className="Container">
      <h2>My List</h2>
      <div className="movieList">
        {myList.map((movie) => (
          <div key={uuidv4()} className="movieTile">
            <img
              src={movie.imageUrl}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
