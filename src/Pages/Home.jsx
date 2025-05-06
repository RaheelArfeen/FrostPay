import React, { useEffect } from 'react';
import Banner from '../Components/Banner';
import Partners from '../Components/HomeComponent/Partners';
import Features from '../Components/HomeComponent/Features';
import UserFeedback from '../Components/HomeComponent/UserFeedback';
import BottomPart from '../Components/HomeComponent/BottomPart';

const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Banner></Banner>
            <Partners></Partners>
            <Features></Features>
            <UserFeedback></UserFeedback>
            <BottomPart></BottomPart>
        </div>
    );
};

export default HomePage;