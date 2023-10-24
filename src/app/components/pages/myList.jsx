import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Navigation, Pagination, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/Parallax";


export default function MyList() {
  const myList = JSON.parse(localStorage.getItem("myList")) || [];
  return (
    <Swiper
    modules={[Navigation, Pagination, Parallax]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
      >
    <div className="Container">
      <h2>My List</h2>
      <div className="movieList">
        {myList.map((movie) => (
          <SwiperSlide key={uuidv4()}>
          <div key={uuidv4()} className="movieTile">
            <img
              src={movie.imageUrl}
              alt={movie.title}
            />
          </div>
          </SwiperSlide>
        ))}
      </div>
    </div>
    </Swiper>
  );
}
