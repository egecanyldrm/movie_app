import React from 'react';
import Image from '../Images/background.jpg'

const Home = () => {
    
    return (
        <section className='d-flex justify-content-center' >
            <div className='position-absolute mt-5 pt-5 text-center' >
                <h1>Welcome to the </h1>
                <h1>World of TV Series & Movies</h1>
            </div>
            <img src={Image} alt="" className='img-fluid' />

        </section>
    )
};

export default Home;
