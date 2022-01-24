import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
   </React.Fragment>
  )
};

export default App;
