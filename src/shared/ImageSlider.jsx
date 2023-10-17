import { useState } from "react";
import PropTypes from "prop-types";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import ReusableMovieList from "./MovieList/ReusableMovieList"

export function ImageSlider({ imageUrls }) {

    function showNextImage() {
        setImageIndex(index => {
        if (index === imageUrls.lengh - 1) return 0 
        return index + 1
    })
    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return imageUrls.langth - 1 
            return index - 1
    })
}

  return (

    <div>
      <ReusableMovieList />
      <button onClick={showPrevImage} className="ImgSlider">
        <ArrowBigLeft />
      </button>
      <button onClick={showNextImage} className="ImgSlider">
        <ArrowBigRight />
      </button>
    </div>
  );
  }}

ImageSlider.propTypes = {
    imageUrls: PropTypes.string
}