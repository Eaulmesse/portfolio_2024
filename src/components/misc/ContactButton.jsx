import React from 'react';
import AvailableLed from './AvailableLed';

const ContactButton = () => {
    return (
        <>  
            <button className='w-32 flex items-center be-vietnam-pro-regular justify-evenly text-white border-2 rounded-lg '>
                <p>Disponible</p>
                <AvailableLed></AvailableLed>
            </button>

        </>
    );
};

export default ContactButton;