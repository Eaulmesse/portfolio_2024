// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faReact } from '@fortawesome/free-brands-svg-icons'



// const ModalReact = ({  }) => {
//     return (
//         <div className='w-5/6 border-2 rounded-lg border-orange-600 m-auto md:m-0 p-2'>
//             <p className="staatliches text-2xl  tracking-tighter text-orange-600 flex justify-between items-center">
//                 React
//                 <FontAwesomeIcon className='ml-2' icon={faReact} />
//             </p>

//             <p className='be-vietnam-pro-regular text-orange-600 mt-5'>
//                 React est une bibliothèque JavaScript open-source utilisée pour la création d'interfaces utilisateur. Elle est maintenue par Facebook et une communauté de développeurs individuels et d'entreprises. React peut être utilisé comme base dans le développement d'applications à page unique ou mobiles, en raison de sa capacité à gérer rapidement les données qui changent avec le temps.
//             </p>



//         </div>
//     );
// };

// export default ModalReact;

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalReact = ({ title, icon, fullText, isDeleting, setIsDeleting }) => {
    const [displayedText, setDisplayedText] = useState('');
    


    useEffect(() => {
        let index = 0;
        
        setDisplayedText(''); // Réinitialise le texte
        let interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, index + 1)); // Ajoute des caractères un par un
            index++;
            if (index >= fullText.length) clearInterval(interval); // Arrête à la fin du texte
        }, 10); // Ajuster la vitesse d'affichage ici
        console.log('fullText', fullText);
        
        if (isDeleting) {
            interval = setInterval(() => {
                setDisplayedText((prev) => {
                    const newText = prev.slice(0, -1);
                    if (newText === '') {
                        setIsDeleting(false); // Arrêter la suppression
                        
                        
                        return newText; // Retourner une chaîne vide
                    }
                    return newText; // Continuer à supprimer
                });
            }, 75); // Vitesse de suppression plus rapide pour fluidité
        }

        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <div className='w-5/6 border-2 rounded-lg border-orange-600 m-auto md:m-0 p-2 bg-orange-600 text-white bg-opacity-80 shadow-inner'>
            <p className="staatliches text-2xl tracking-tighter flex justify-between items-center">
                {title}
                {icon && <FontAwesomeIcon className='ml-2' icon={icon} />}
            </p>
            <p className='be-vietnam-pro-regular mt-5'>
                {displayedText}
            </p>
        </div>
    );
};

export default ModalReact;
