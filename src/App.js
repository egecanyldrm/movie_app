import React from 'react';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Movies from './Components/Movies';
import TvSeries from './Components/TvSeries';

const App = () => {
  return (
    <React.Fragment >
      <Home />
      <Movies />
      <TvSeries />
      <Footer />
    </React.Fragment>
  )
};

export default App;
