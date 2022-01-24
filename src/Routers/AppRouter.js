import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import DetailPage from '../Components/DetailPage';
import Navbar from '../Components/Navbar';
import ScrollToTop from '../Routers/ScrollToTop'
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/search/detail/:id" component={DetailPage} />
            </Switch>
        </BrowserRouter>
    )
};

export default AppRouter;
