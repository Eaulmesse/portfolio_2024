import React from 'react';
import OfferCard from './OfferCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheck } from '@fortawesome/free-solid-svg-icons';


const MyOffer = () => {
    return (
        <>
            <div className='flex text-green-500 items-center mt-10 lg:mt-0'>
                <p className='staatliches text-3xl sm:text-6xl drop-shadow-sm tracking-tighter mr-2'>What i can offer</p>
                <FontAwesomeIcon className='text-3xl sm:text-6xl' icon={faCheck}></FontAwesomeIcon>
            </div>

            <div className='w-full sm:flex flex-wrap'>
                <OfferCard title='Web development' description='I can create your website from scratch with the latest technologies' icon={<FontAwesomeIcon className='text-3xl text-white' icon={faCheck}></FontAwesomeIcon>} />
                <OfferCard title='Web development' description='I can create your website from scratch with the latest technologies' icon={<FontAwesomeIcon className='text-3xl text-white' icon={faCheck}></FontAwesomeIcon>} />
                <OfferCard title='Web development' description='I can create your website from scratch with the latest technologies' icon={<FontAwesomeIcon className='text-3xl text-white' icon={faCheck}></FontAwesomeIcon>} />
                <OfferCard title='Web development' description='I can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologiesI can create your website from scratch with the latest technologies' icon={<FontAwesomeIcon className='text-3xl text-white' icon={faCheck}></FontAwesomeIcon>} />
            </div>
            
        </>
    );
};

export default MyOffer;