import React from "react";
import Logo from "../../../shared/Logo";
import logoImg from "../../../assets/images/logo.jpg";
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
