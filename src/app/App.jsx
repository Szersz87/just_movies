import React from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Router, Route, BrowserRouter  } from "react-router-dom";
import "./App.scss";
import "./components/menu/header.scss";
import "./components/hero/hero.scss";
import Hero from "./components/hero/hero";
import Header from "./components/menu/header";
import Root from "../routes/root"

// Pages
import Series from "./components/pages/series";
import Movies from "./components/pages/movies";
import NewAndPopular from "./components/pages/newAndPopular";
import MyList from "./components/pages/myList";

// layouts
import Layout from './components/pages/layout'


// const Routes = createBrowserRouter([
//   { path : "/", element : <Layout />, children : [
//     { path : "/", element : <homePage />},
//     { path : "/series", element : <Series />},
//     { path : "/movies", element : <Movies />},
//     { path : "/newAndPopular", element : <NewAndPopular />},
//     { path : "/MyList", element : <MyList />}
//   ]},
  
// ]);

const App = () => {
  return (
    
<Root />

//  <RouterProvider router={Routes} />
 
    );
  }

  export default App;

  