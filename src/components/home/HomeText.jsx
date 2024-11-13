import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactButton from '../misc/ContactButton';
import CvButton from './CvButton';



import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const HomeText = () => {
    return (
        <div className='w-full lg:w-2/3 min-h-full bg-gray-800 p-5 rounded-lg drop-shadow-lg flex flex-col justify-between'>  
            
            <div className='space-y-3'>
                <p className='be-vietnam-pro-regular text-gray-100 text-xl'>En savoir plus sur moi.</p>
                <p className='be-vietnam-pro-regular text-gray-300'>
                    Je m'appelle Théo, j'ai 22 ans et je sors de 3 ans d'études de développement informatique axé web. 
                    
                </p>
            </div>

            <CvButton/>
            
        </div>
    );
};

export default HomeText;