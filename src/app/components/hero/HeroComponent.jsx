import React from "react";
import Buttons from "./HeroButtons";

function Hero() {
  
  const youtubeTrailerURL = "https://www.youtube.com/embed/1bjfXYXHjFo";

  return (
    <div className="card">
      <div className="overlayImg"></div>
      <h3 className="cardText">
      Formula One teams have rebuilt their cars from scratch for the exciting 2022 season, in which there is no clear favorite to win the championship titles.
      </h3>
      <Buttons youtubeTrailerURL={youtubeTrailerURL}/>
    </div>
  );
}

export default Hero;