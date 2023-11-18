import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import Hamburger from '../pages/HamburgerNav'

export default function NavigationMenu() {

  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () =>{
    setHamburgerOpen(!isHamburgerOpen)
    console.log("Hamburger clicked. State:", isHamburgerOpen);
  }
  return (
    <>
      <nav className={`webMenu ${isHamburgerOpen ? 'hamburgerOpen' : ''}`}>
        <div className="hamburger" onClick={toggleHamburger}>
          
          <Hamburger />
        </div>
        
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/randomMovies">Random Movies</Link>
          </li>
          <li>
            <Link to="/favouriteList">Favourite List</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
