import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import { useLocalStorage }  from "../../../shared/Hooks/UseLocalStorage";

export default function FavouriteList() {
  const [value] = useLocalStorage("movies");
  

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
          {value && value.map((movies) => (
            <SwiperSlide key={uuidv4()}>
              <div key={uuidv4()} className="myListContainer">
                <h2 className="title">{movies.title.label}</h2>
                <div className="description">
                  <div className="image">
                    <img src={movies["im:image"][2].label} alt={movies.title.label} />
                  </div>
                  <div className="text">
                    <h3>
                      {movies.summary.label
                        ? movies.summary.label
                        : "Description will be added soon ;)"}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </div>
    </Swiper>
  );
}
