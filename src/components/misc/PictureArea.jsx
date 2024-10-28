import React from 'react';
import homePicture from '../../assets/home-picture.jpg';


const PictureArea = () => {
    return (
        <>  
            <div className='w-4/5 md:w-fit md:mt-0 absolute md:static'>
                <img src={homePicture} className='rounded-md w-full ' alt="" />
            </div>
        </>
    );
};

export default PictureArea;