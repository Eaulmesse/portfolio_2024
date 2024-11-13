import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CvButton = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/path/to/your/cv.pdf'; 
        link.download = 'CV.pdf';
        link.click();
    };

    return (
        <div className='mt-5'>
            <button onClick={handleDownload} className="be-vietnam-pro-regular text-gray-200 text-xl flex items-center">
                Télécharger mon CV
                <FontAwesomeIcon className='text-xl text-gray-200 ml-2' icon={ faArrowRight }/>
            </button>
        </div>
    );
    
};

export default CvButton;