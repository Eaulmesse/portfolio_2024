import React from 'react';
import Title from '../misc/Title';
import Banner from './Banner';
import PictureArea from '../misc/PictureArea';
import HomeText from './HomeText';
import FreelanceText from './FreelanceText';
import Network from './Network';

const Home = () => {
    return (
        <div className="content-wrapper lg:flex mb-12 m-auto">
            <div className="mt-10 sm:mt-0 h-full relative text-center sm:text-left">
                <Title />
                <div className="flex justify-center mt-5 sm:justify-between relative">
                    <Banner />
                    <PictureArea />
                </div>
            </div>

            
            <div className='z-50 w-5/6 flex flex-col items-center mt-10 lg:mt-0 lg:items-end m-auto'>
                <div className='w-full lg:w-5/6 bg-gray-800 bg-opacity-60 rounded-lg p-5 drop-shadow-lg'>
                    <HomeText />
                </div>
                <div className='w-full lg:w-5/6  mt-10 bg-gray-800 bg-opacity-80 rounded-lg p-5 drop-shadow-lg'>
                    <FreelanceText />
                </div>

                <div className='w-full lg:w-5/6 mt-10'>
                    <Network></Network>
                </div>
            </div>

                
                
            
           
            
        </div>
    );
};


export default Home;