import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.scss'
import './menu/navBar.scss'
import './header/header.scss'
import Header from'./header/header'
import NavBar from './menu/navBar';


function App() {
  return (
    <>
     <div className='menu'><NavBar /></div>;
    <div><Header /></div>
    </>
  );
}

export default App;
