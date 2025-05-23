import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import TitleManager from '../TitleManager/TitleManager';
import { ScrollToTop } from '../Components/ScrollToTop';

const Root = () => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <TitleManager></TitleManager>
            <Header></Header>
            <Outlet></Outlet>
            <div className='bg-[#1A1F2C]'>
                <Footer></Footer>
            </div>
            <ScrollToTop></ScrollToTop>
        </div>
    );
};

export default Root;