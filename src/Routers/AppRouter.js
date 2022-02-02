import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import DetailPage from '../Components/DetailPage';
import Navbar from '../Components/Navbar';
import NotFoundPage from '../Components/NotFoundPage';

const AppRouter = () => {

    return (
        <BrowserRouter  >
            <Navbar />
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/detail/:type/:id" element={<DetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;
