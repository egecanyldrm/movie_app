import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const SlickCarousel = ({ items, title, id, type }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id={id} className=' p-5 mt-5' >
            <h1 className='mb-4'>{title} </h1>
            <Slider {...settings}>
                {items.map((movie) => {
                    return (
                        <Link key={movie.title ? movie.title : movie.name} to={`/detail/${type}/${movie.id}`} >
                            <div className='position-relative movie-card  '  >
                                <div className='position-absolute rounded py-1 px-2 avarage' >
                                    <h5> {movie.vote_average}/10</h5>
                                </div>

                                <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="poster" className='img-fluid' />
                                <div className="overlay position-absolute ">
                                    <p className='m-auto text-break h5 '>{movie.original_title ? movie.original_title : movie.name}</p>
                                </div>

                            </div>
                        </Link>
                    )
                })}
            </Slider>
        </div>
    )
};

export default SlickCarousel;
