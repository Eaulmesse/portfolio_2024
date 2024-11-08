import React from 'react';
import reactsvg from '../../assets/react-brands-solid.svg';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSymfony } from '@fortawesome/free-brands-svg-icons'



const ButtonSymfony = ({ isActive, onClick }) => {
    return (
        <button 
            className={`flex justify-center md:justify-start shadow-xl items-center text-xl be-vietnam-pro-regular border-2 rounded-md w-32 px-2  
                        ${isActive ? 'text-white bg-orange-600' : 'text-orange-600 border-orange-600'}`}
            onClick={onClick}
        >
            Symfony
            <FontAwesomeIcon className='ml-2' icon={faSymfony} />
        </button>
    );
};

export default ButtonSymfony;
