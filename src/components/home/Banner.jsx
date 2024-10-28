import React from 'react';
import AvailableLed from '../misc/AvailableLed';
import ContactButton from '../misc/ContactButton';

const Banner = () => {
    return (
        <>  
            <div className='text-white flex flex-col md:justify-between'>
                
                <div className='flex flex-col md:items-start'>
                    <p className='abril-fatface text-6xl sm:text-8xl md:text-9xl max-w-64 relative z-50 text-left'>Portfolio 2024.</p>
                </div>
                
            </div>
        </>
    );
};

export default Banner;