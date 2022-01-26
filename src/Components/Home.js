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
            .catch(()=>{})
    }, [search])


    return (
        <section className='d-flex justify-content-center home' style={{backgroundImage : `url(${Image})`}} >
            <div className='position-absolute mt-lg-5 pt-md-5  pt-4 text-center' >
                <h1 className=' home-title' >Welcome</h1>
                <h1 className='home-title' >World of TV Series & Movies</h1>
                <div className="input-group input-group-lg">
                    <input type="search" className='form-control shadow-sm mt-4' placeholder='Search Movie Or Tv Series' onChange={(e) => { setSearch(e.target.value); }} />
                </div>
                <div className="dropdown-group">
                    <div className='list-group'>
                        {search && results.map((item) => {
                            return (
                                <Link key={item.id} className='list-group-item list-group-item-action d-flex justify-content-between'  to={`/${item.media_type}/detail/${item.id}`} >
                                    <div>{item.original_title ? item.original_title : item.name}</div>
                                    <div className='text-capitalize'>{item.media_type}</div>
                                </Link>
                            )

                        })}

                    </div>
                </div>

            </div>

        </section>
    )
};

export default Home;
