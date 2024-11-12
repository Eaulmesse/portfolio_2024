import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Network = () => {
    return (
        <div className='flex'>
            <a href="https://www.linkedin.com/in/guerin-theo" target='blank' className='w-32 h-8 flex items-center be-vietnam-pro-regular justify-evenly text-white border-2 rounded-lg mr-2'>
                <FontAwesomeIcon className='text-xl' icon={faLinkedinIn}></FontAwesomeIcon>
                <p>Linkedin</p>
            </a>

            <a href="https://github.com/Eaulmesse" target='blank' className='w-32 h-8 flex items-center be-vietnam-pro-regular justify-evenly text-white border-2 rounded-lg '>
                <FontAwesomeIcon className='text-xl' icon={faGithub}></FontAwesomeIcon>
                <p>Github</p>
            </a>
        </div>
    );
};

export default Network;