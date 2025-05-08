import React, { useEffect } from 'react';
import Banner from '../Components/Banner';
import Partners from '../Components/HomeComponent/Partners';
import Features from '../Components/HomeComponent/Features';
import UserFeedback from '../Components/HomeComponent/UserFeedback';
import BottomPart from '../Components/HomeComponent/BottomPart';
import Blogs from '../Components/HomeComponent/Blogs';
import FAQSection from '../Components/HomeComponent/FAQSection';
import AboutUsSection from '../Components/HomeComponent/AboutSection';
import Companies from '../Components/HomeComponent/Companies';

const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Banner></Banner>
            <Partners></Partners>
            <AboutUsSection></AboutUsSection>
            <Companies></Companies>
            <Features></Features>
            <Blogs></Blogs>
            <UserFeedback></UserFeedback>
            <FAQSection></FAQSection>
            <BottomPart></BottomPart>
        </div>
    );
};

export default HomePage;