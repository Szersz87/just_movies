import React from "react";
import {Router, Route } from "react-router-dom"
import Header from "../app/components/menu/header";
import Series from "../app/components/pages/series";
import Movies from "../app/components/pages/movies";
import NewAndPopular from "../app/components/pages/newAndPopular";
import MyList from "../app/components/pages/myList";

export default function Root () {
    return (
    <Router>
        <Header />
        <Route path ="/" element= {<homePage />}/>
        <Route path ="/series" element= { <Series />}/>
        <Route path ="/movies" element= { <Movies />}/>
        <Route path ="/newAndPopular" element= { <NewAndPopular />}/>
        <Route path ="/MyList" element= {<MyList />}/>
    </Router>
    )}