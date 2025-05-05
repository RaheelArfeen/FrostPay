import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default HomePage;