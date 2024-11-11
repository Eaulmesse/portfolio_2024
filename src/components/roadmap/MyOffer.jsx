import React from 'react';
import OfferCard from './OfferCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheck } from '@fortawesome/free-solid-svg-icons';


const MyOffer = () => {
    return (
        <>
            <div className='flex text-gray-200 items-center mt-10 lg:mt-0 bg-gray-800 w-fit p-2 rounded-lg drop-shadow-lg'>
                <p className='be-vietnam-pro-regular text-3xl drop-shadow-sm tracking-tighter mr-2'>What i can offer</p>
                <FontAwesomeIcon className='text-xl' icon={faCheck}></FontAwesomeIcon>
            </div>

            <div className='w-full sm:flex flex-wrap'>
                <OfferCard title='Web development' description='I can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologies' icon={<FontAwesomeIcon className='text-3xl text-white' icon={faCheck}></FontAwesomeIcon>} />
            </div>
            
        </>
    );
};

export default MyOffer;