import React, { useEffect } from 'react';
import { Link } from 'react-router';
import Header from '../Components/Header';

const ErrorPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Header />
            <div className='flex flex-col items-center justify-center mt-24 text-center px-4'>
                <div className='text-6xl w-56 mb-4'><img src="https://i.ibb.co.com/Dffzbw6g/image.png" /></div>
                <h1 className='text-5xl font-bold mb-2'>Page Not Found</h1>
                <p className='text-lg text-gray-600 mb-6'>
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    to='/'
                    className='py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all duration-300'
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
