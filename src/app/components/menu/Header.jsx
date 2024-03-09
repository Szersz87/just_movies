import React from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNavi";
import HamburgerNav from "../pages/HamburgerNav"

function Header() {
  return (
    <div className="navBar">
      <LeftNav />
      <HamburgerNav />
      <RightNav />
    </div>
  );
}

export default Header;