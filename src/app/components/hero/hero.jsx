import React from "react";
import BtnInfo from '../../../shared/buttons/infoBt'
import BtnPlay from '../../../shared/buttons/playBt'

function Hero () {
    return (
        <div className="card">
            <h3 className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className="cardBtns">
                < BtnPlay />
                < BtnInfo />
            </div>
        </div>
    )
  }

  export default Hero;