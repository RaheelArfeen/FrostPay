import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Partners from '../Components/HomeComponent/Partners';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Partners></Partners>
        </div>
    );
};

export default HomePage;