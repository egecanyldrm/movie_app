import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActorImage from '../Images/ActorImage.jpeg'

const Cast = ({ id, type }) => {

    const [cast, setCast] = useState([]);
    const [datastatus, setdataStatus] = useState(false)
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        swipeToSlide: true,
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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=b6a36190fedc206b2be58a35c9b08e95`)
            .then((response) => {
                if(response.status === 200){
                    setCast(response.data.cast);
                    setdataStatus(true);
                }
            })
            .catch((event) => {  })
    }, [id, type])
    return (
        <div>
            { datastatus && cast.length > 5 ?
                <section className='cast container my-5' >
                    <h3 className='mb-4' >Top Billed Cast </h3>
                    <div className="cast">
                        <Slider {...settings}>
                            {cast && cast.map((actor) => {
                                return (
                                    <div key={actor.name} className="card  text-center rounded-3 actor-card shadow-sm  " >

                                        {actor.profile_path ? <img src={`https://image.tmdb.org/t/p/h632/${actor.profile_path}`} alt="actor" className='card-img-top' /> : <img src={ActorImage} alt="PlaceHolder" className='card-img-top' />}
                                        <div className="card-body">
                                            <h5 className="card-title">{actor.name}</h5>
                                            <span className='fw-light'  >{actor.character}</span>
                                        </div>

                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </section>
                :
                <div></div>
            }
        </div>

    );
};

export default Cast;
