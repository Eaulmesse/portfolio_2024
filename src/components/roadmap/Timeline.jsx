import React from 'react';

const Timeline = () => {
    
    const timeline = ['Formation Pre-Qualifiante', 'Formation Qualifiante', 'Stage en Entreprise', 'Alternance BAC+3', 'Freelance'];

    return (
        <div className='flex flex-col items-start'>
            
            {/* <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200 flex justify-center items-center m-auto'>
                    <div className='w-4 h-4 rounded-full bg-green-500'></div>
                </div>
                <div className='w-56 h-44 bg-green-500'></div>
                
            </div> */}
            

            
            {timeline.map((item, index) => (
                <div key={index} className='flex mb-4'>
                    <div className='w-6 h-6 rounded-full bg-gray-200 flex justify-center items-center m-auto'>
                        <div className='w-4 h-4 rounded-full bg-green-500'></div>
                    </div>
                    <div className='ml-4 p-4 bg-green-500 text-white rounded-lg shadow-lg'>
                        {item}
                    </div>
                </div>
            ))}
            
            
        </div>
    );
};

export default Timeline;