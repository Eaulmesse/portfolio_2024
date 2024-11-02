import React from 'react';
import homePicture from '../../assets/home-picture.jpg';


const PictureArea = () => {
    return (
        <div className="w-4/5 md:w-fit md:ml-12 m-auto mt-10 md:mt-0 relative z-0">
            <img src={homePicture} className="rounded-md w-full" alt="" />
        </div>
    );
};


export default PictureArea;