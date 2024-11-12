import React from 'react';
import Title from '../misc/Title';
import Banner from './Banner';
import PictureArea from '../misc/PictureArea';
import HomeText from './HomeText';
import FreelanceText from './FreelanceText';
import Network from './Network';
import RoadmapButton from './RoadmapButton';

const Home = () => {
    return (
        <div className="content-wrapper xl:flex mb-12 m-auto">
            <div className="mt-10 sm:mt-0 h-full relative text-center sm:text-left">
                <Title />
                <div className="flex justify-center mt-5 sm:justify-between relative">
                    <Banner />
                    <PictureArea />
                </div>
            </div>

            
            <div className='w-5/6 lg:w-full flex flex-col xl:items-end m-auto mt-10 xl:mt-0 '>
                <div className='w-full lg:w-5/6 card-gradient bg-opacity-60 rounded-lg p-5 drop-shadow-lg lg:self-end '>
                    <HomeText />
                </div>
                <div className='w-full lg:w-5/6 mt-10 card-gradient bg-opacity-80 rounded-lg p-5 drop-shadow-lg lg:self-start xl:self-end'>
                    <FreelanceText />
                </div>
                <div className='w-full lg:w-5/6 mt-10 flex justify-end'>
                    <Network />
                    {/* <RoadmapButton /> */}
                </div>
            </div>

                
                
            
           
            
        </div>
    );
};


export default Home;