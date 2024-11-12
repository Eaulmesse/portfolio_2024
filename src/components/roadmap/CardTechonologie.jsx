import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardTechnologie = ({ icon, tech }) => {
    return (
        <>
            <div className='flex items-center sm:flex-col card-gradient w-full p-3 mt-2 sm:mr-2 sm:p-0 sm:w-52 sm:h-60 rounded-xl drop-shadow-lg duration-100 transform hover:scale-105'>
                <FontAwesomeIcon className='text-5xl sm:text-7xl text-gray-200 sm:mt-14' icon={icon} />
                <p className='be-vietnam-pro-regular text-gray-200 m-auto'>{tech}</p>
            </div>

        </>
    );
};

export default CardTechnologie;