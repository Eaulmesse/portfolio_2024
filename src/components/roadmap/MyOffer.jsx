import React from 'react';
import OfferCard from './OfferCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheck } from '@fortawesome/free-solid-svg-icons';


const MyOffer = () => {
    return (
        <>
            <div className='flex text-gray-200 items-center mt-10 lg:mt-0'>
                <p className='be-vietnam-pro-regular text-4xl drop-shadow-sm tracking-tighter mr-2'>What i can offer</p>
                <FontAwesomeIcon className='text-xl' icon={faCheck}></FontAwesomeIcon>
            </div>

            <div className='w-full sm:flex flex-wrap rounded-lg card-gradient drop-shadow-lg mt-2 ">'>
                <OfferCard title='Web development' description='I can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologies' icon={<FontAwesomeIcon className='text-3xl text-white' icon={faCheck}></FontAwesomeIcon>} />
                <div className='h-1 w-5/6 m-auto bg-gray-300 rounded-full'></div>
                <OfferCard title='Web development' description='I can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologies' icon={<FontAwesomeIcon className='text-3xl text-white' icon={faCheck}></FontAwesomeIcon>} />
            </div>
            
        </>
    );
};

export default MyOffer;