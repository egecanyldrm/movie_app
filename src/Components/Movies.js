import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SlickCarousel from './SlickCarousel';



const Movies = () => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/popular?api_key=b6a36190fedc206b2be58a35c9b08e95')
            .then((response) => setMovies(response.data.results))
            .catch((error) => console.log(error));
    }, [])

    return (
        <SlickCarousel id={"movies"} items={movies} title={"Popular Movies"}/>
    )
};

export default Movies;
