import React from 'react';
import PropTypes from 'prop-types';

const OfferCard = ({ title, description, icon }) => {
    return (
        // <div className="w-full mr-5 min-h-60 rounded-lg bg-gray-800 drop-shadow-lg mt-2">
        <div className="w-full mr-5 min-h-60">
            <div className="w-5/6 m-auto rounded-full text-gray-200 w-12 h-12 flex items-center mt-5">
                {icon}
            </div>
            <div className="w-5/6 m-auto mt-5 pb-2">
                <h3 className='be-vietnam-pro-regular text-2xl text-gray-100 m-auto'>{title}</h3>
                <p className='be-vietnam-pro-regular text-gray-300 my-5'>{description}</p>
            </div>
        </div>
    );
};

OfferCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
};

export default OfferCard;