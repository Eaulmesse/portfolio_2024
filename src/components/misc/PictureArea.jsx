import React from 'react';
import homePicture from '../../assets/home-picture.jpg';
import Banner from '../home/Banner';

const PictureArea = () => {
    return (
        <div className="w-full max-w-lg md:m-0  drop-shadow-lg  md:mt-0 relative z-0">
            <img src={homePicture} className="rounded-md w-full" alt=""/>
            {/* Positionnement de Banner en bas de l'image */}
            <Banner />
        </div>
    );
};

export default PictureArea;

