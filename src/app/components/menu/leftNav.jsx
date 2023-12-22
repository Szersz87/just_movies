import React from "react";
import Logo from "../../../shared/Logo";
import logoImg from "../../../assets/images/JUST MOVIES Logo - Original - 5000x5000.png";
import { Link } from "react-router-dom";


function LeftNav() {
  return (
    <div className="images">
      <Link to="/">
        <Logo imageSrc={logoImg} />
      </Link>
    </div>
  );
}
export default LeftNav;
