import React from 'react';
import PropTypes from 'prop-types';

const OfferCard = ({ title, description, icon }) => {
    return (
        <div className="w-full mr-5 min-h-60 border rounded-lg bg-gray-200 drop-shadow-lg mt-2">
            <div className="w-5/6 ml-5 rounded-full bg-green-500 w-12 h-12 flex justify-center items-center mt-5">
                {icon}
            </div>
            <div className="w-5/6 m-auto mt-5 pb-2">
                <h3 className='be-vietnam-pro-regular text-xl text-green-500 m-auto'>{title}</h3>
                <p className='be-vietnam-pro-regular text-gray-600 mt-5'>{description}</p>
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