import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SlickCarousel from './SlickCarousel';

const TvSeries = () => {

    const [tvseries, setTvseries] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/tv/popular?api_key=b6a36190fedc206b2be58a35c9b08e95')
            .then((response) => setTvseries(response.data.results))
            .catch((error) => console.log(error));

    }, [])
    return (
            <SlickCarousel id={"tvseries"} type={"tv"} items={tvseries} title={"Popular Tv Series"} />
    )
};
export default TvSeries;
