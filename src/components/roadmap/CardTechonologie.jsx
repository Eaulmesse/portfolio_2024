import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardTechnologie = ({ icon, tech }) => {
    return (
        <>
            <div className='flex items-center md:flex-col bg-gray-200 w-52 p-3 md:p-0 md:h-60 rounded-xl drop-shadow-lg hover:bg-green-400 duration-100 transform hover:scale-105 '>
                <FontAwesomeIcon className='text-5xl md:text-7xl text-green-500 md:mt-14' icon={icon} />
                <p className='be-vietnam-pro-regular text-green-500 m-auto'>{tech}</p>
            </div>

        </>
    );
};

export default CardTechnologie;