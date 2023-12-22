import { Outlet, Link } from "react-router-dom";
import React from 'react';
import PropTypes from 'prop-types';


export default function NavigationMenu({ isOpen, closeMenu }) {
  return (
    <>
      <nav className={`webMenu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/randomMovies">Random Movies</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/favouriteList">Favourite List</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
NavigationMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};