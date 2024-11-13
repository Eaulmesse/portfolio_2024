import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const RoadmapButton = () => {
    return (
        <a href='roadmap' className='w-full lg:w-1/3 min-h-full bg-gray-800 p-5 rounded-lg drop-shadow-lg flex flex-col justify-between items-center'> 
            
            <div className='flex-grow flex items-center justify-center'>
                <FontAwesomeIcon className='text-5xl text-gray-200' icon={faArrowRight} />
            </div>

            <p className='be-vietnam-pro-regular text-gray-200 text-xl mb-2'>Roadmap.</p>
        </a>
    );
};

export default RoadmapButton;
