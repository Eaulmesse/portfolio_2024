import React from 'react';
import Title from '../misc/Title';
import Banner from './Banner';
import PictureArea from '../misc/PictureArea';
import HomeText from './HomeText';

const Home = () => {
    return (

        <div className="content-wrapper lg:flex mb-12">
            <div className='mt-10 md:mt-0 h-full'>
                <Title />
                <div className='flex justify-center mt-5 md:justify-normal'>
                    <Banner />
                    <PictureArea />
                </div>
            </div>

            <div className=''>
                <HomeText></HomeText>
            </div>
        </div>
        
    );
};

export default Home;