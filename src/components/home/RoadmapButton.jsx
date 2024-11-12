import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const RoadmapButton = () => {
    return (
        <div className='w-40 h-8  rounded-lg drop-shadow-lg bg-gray-800 be-vietnam-pro-regular mt-5 lg:mt-0' >
            <a  href='/roadmap' className="text-gray-200 text-xl w-full m-auto">
                Roadmap
                <FontAwesomeIcon className='ml-2 ' icon={faArrowRight}></FontAwesomeIcon>
            </a>
        </div>
        
    );
};

export default RoadmapButton;