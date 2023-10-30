import React from "react";
import { useLocation } from "react-router-dom";



function MovieDetails() {
    let { state } = useLocation();
    console.log("Stan:", state);

    const movieData = state ? state.movieData : null;


    if (!movieData) {
        return <div>Brak dostępnych danych filmu.</div>;
    }

    console.log(movieData);

    return (
        <div>
            <h2>{movieData["im:name"].label}</h2>
        </div>
    );
}


export default MovieDetails;