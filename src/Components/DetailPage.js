import axios from 'axios';
import React, { useEffect, useState  } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Cast from './Cast';


const DetailPage = ({ match }) => {

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/${match.params.type}/${match.params.id}?api_key=b6a36190fedc206b2be58a35c9b08e95`)
            .then((response) => { setDetail(response.data); });
    }, [match.params.id, match.params.type])

    const url = `https://image.tmdb.org/t/p/original/${detail.backdrop_path}`;

    return (

        <React.Fragment >
            {detail ?
                <div style={{ backgroundImage: `url("${url}")` }} className='background-image'>
                    <div className=" linear  px-5 ">
                        <div className=" d-flex justify-content-center py-5 px-5">
                            <div className=" responsive  text-white d-flex justify-content-center align-items-md-center align-items-xl-start flex-sm-column flex-lg-row px-5 ">
                                <div className=" poster-card card col-md-4" >
                                    {detail.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt="" className="card-image-top" />}
                                </div>
                                <div className="content  col-md-8 ps-sm-5">
                                    <h1>{detail.name ? detail.name : detail.title}</h1>
                                    <div className="info d-flex mt-3">
                                        <span className='me-3' >{detail.release_date}   </span>
                                        <ul className='d-flex list-unstyled flex-wrap' >{detail.genres && detail.genres.map((genres) => (<li key={genres.id} className='ms-2' > {genres.name}  </li>))}</ul>
                                    </div>
                                    <div className="rate ">
                                        <CircularProgressbar value={detail.vote_average * 10} text={`${detail.vote_average * 10}%`} styles={{ path: { stroke: '#21d07a', transition: 'stroke-dashoffset 0.5s ease 0s' }, text: { fill: '#ffff', fontSize: '25px' } }} />
                                    </div>
                                    <div className="mt-4">
                                        <span className='fst-italic text-secondary h5' >{detail.tagline}</span>
                                    </div>
                                    <div className="overview mt-4">
                                        {detail.overview && <h4>Overview</h4>}
                                        {<p className='text-break' > {detail.overview}</p>}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <div className="spinner-border" role="status"> <span className="visually-hidden">Loading...</span></div>
            }
            {detail.id && <Cast type={match.params.type} id={detail.id} />}
        </React.Fragment>
    )

};

export default DetailPage;

/* https://api.themoviedb.org/3/movie/${id}?api_key=b6a36190fedc206b2be58a35c9b08e95 */

/* https://api.themoviedb.org/3/tv/${id}?api_key=b6a36190fedc206b2be58a35c9b08e95 */
