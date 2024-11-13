import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FreelanceText = () => {
    return (
        <div className='p-5'>
            <h1 className='be-vietnam-pro-regular text-gray-100 text-3xl'>Pourquoi je suis freelance.</h1>
            <p className='be-vietnam-pro-regular text-gray-300 mt-5 text-justify break-all sm:break-normal'>Je suis quelqu'un d'indépendant et d'entreprenant qui cherche à ne dépendre que de soi, produire et apprendre par lui-même avec la liberté d'un freelance. Être freelance me permet de choisir les projets qui me passionnent vraiment, de travailler à mon propre rythme et de constamment relever de nouveaux défis. J'apprécie la diversité des missions et la possibilité de collaborer avec des clients de différents horizons. Cette autonomie me pousse à me dépasser et à toujours chercher à améliorer mes compétences.</p>

            <a href='https://www.malt.fr/profile/theoguerin' target='blank' className='flex items-center text-gray-300  mt-5'>
                <p className='be-vietnam-pro-regular text-gray-200 text-xl'>Mon profil Malt.</p>
                <FontAwesomeIcon className='text-xl text-gray-200 ml-2' icon={ faArrowRight }/>
            </a>
        </div>
    );
};

export default FreelanceText;