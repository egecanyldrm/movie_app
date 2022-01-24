import React, { useEffect, useState } from 'react';
import Image from '../Images/background.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/search/multi?api_key=b6a36190fedc206b2be58a35c9b08e95&query=${search}`)
            .then((response) => setResults(response.data.results))
            .catch((error) => console.log(error))
    }, [search])


    return (
        <section className='d-flex justify-content-center' >
            <div className='position-absolute mt-5 pt-5 text-center' >
                <h1>Welcome to the </h1>
                <h1>World of TV Series & Movies</h1>
                <div className="input-group input-group-lg">
                    <input type="search" className='form-control shadow-sm mt-4' placeholder='Search Movie Or Tv Series' onChange={(e) => { setSearch(e.target.value); }} />
                </div>
                <div className="dropdown-group">
                    <div className='list-group'>
                        {search && results.map((item) => {
                                return (
                                    <Link className='list-group-item list-group-item-action' to={`/search/detail/${item.id}`} > {item.original_title ? item.original_title : item.name}</Link>
                              )
                            
                        })}

                    </div>
                </div>

            </div>
            <img src={Image} alt="" className='img-fluid' />

        </section>
    )
};

export default Home;
