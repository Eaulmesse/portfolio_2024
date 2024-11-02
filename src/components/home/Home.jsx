import React from 'react';
import Title from '../misc/Title';
import Banner from './Banner';
import PictureArea from '../misc/PictureArea';
import HomeText from './HomeText';
import FreelanceText from './FreelanceText';

const Home = () => {
    return (
        <div className="content-wrapper lg:flex mb-12 m-auto">
            <div className="mt-10 md:mt-0 h-full relative text-center md:text-left">
                <Title />
                <div className="flex justify-center mt-5 md:justify-between relative">
                    <Banner />
                    <PictureArea />
                </div>
            </div>

            <div className='z-50 w-5/6 m-auto'>
                <div className='w-5/6 m-auto mt-10  bg-gray-800 bg-opacity-60 rounded-lg p-5'>
                    <HomeText />
                </div>
                <div className='w-5/6 m-auto mt-10 bg-gray-800 bg-opacity-80 rounded-lg p-5'>
                    <FreelanceText />
                </div>
            </div>
            
        </div>
    );
};


export default Home;