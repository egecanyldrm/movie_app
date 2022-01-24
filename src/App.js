import React from 'react';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import TvSeries from './Components/TvSeries';

const App = () => {

  

  return (
   <React.Fragment >
    <Navbar />
    <Home /> 
    <Movies  />
    <TvSeries /> 
    <Footer /> 
   </React.Fragment>
  )
};

export default App;
