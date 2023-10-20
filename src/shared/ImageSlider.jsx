import React from "react";
import AddToListButton from "./MyListButton"
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";

import 'swiper/css';
import 'swiper/css/virtual';

export default function ImageSlider({slides}) {
 

  return (
    
<Swiper modules={[Virtual]} spaceBetween={5} slidesPerView={3} virtual>
  {slides.map((movie) => (
    <SwiperSlide key={uuidv4()}>
      <div className="movieTile">
        <a href={movie.link[1].attributes.href} target="_blank" rel="noreferrer">
          <img src={movie["im:image"][2].label} alt={movie["im:name"].label} />
        </a>
        <AddToListButton movie={movie} />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

  );
}

ImageSlider.propTypes = {
    slides: PropTypes.array.isRequired
}