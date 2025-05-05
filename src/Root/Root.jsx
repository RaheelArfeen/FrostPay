import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Header></Header>
            <Outlet></Outlet>
            <div className='bg-[#1A1F2C] mt-20'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;