import React from 'react';
import Title from '../misc/Title';
import Banner from './Banner';
import PictureArea from '../misc/PictureArea';
import HomeText from './HomeText';

import Network from './Network';
import RoadmapButton from './RoadmapButton';
import FreelanceText from './FreelanceText';

const Home = () => {
    return (
        <div >
            <div className="relative w-5/6 md:w-3/4 lg:w-full m-auto mt-10 sm:mt-0">
                <Title />
                <div className='lg:flex w-full mt-5  space-y-5 lg:space-x-5 lg:space-y-0 z-40'>
                    <PictureArea />
                    <div>
                        <div className='md:flex space-y-5 md:space-y-0 md:space-x-5'>
                            <HomeText />
                            <RoadmapButton />
                        </div>

                        

                    </div>
                </div>
            </div>

            {/* <div className='content-wrapper w-5/6 m-auto mt-10 xl:mt-0 z-50'>
                <FreelanceText/>
            </div> */}

        </div>
    );
};


export default Home;