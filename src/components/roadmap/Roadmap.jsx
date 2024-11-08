import React, { useState, useEffect } from 'react';
import ButtonReact from './ButtonReact';
import ButtonSymfony from './ButtonSymfony';
import ModalReact from './ModalReact';

import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faSymfony } from '@fortawesome/free-brands-svg-icons';

const Roadmap = () => {
    const [displayedText, setDisplayedText] = useState('RoadMap');
    const [targetText, setTargetText] = useState('RoadMap'); 
    const [isDeleting, setIsDeleting] = useState(false); 

    useEffect(() => {
        if (displayedText === targetText) return;

        let interval;
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
        } else {
            interval = setInterval(() => {
                setDisplayedText((prev) => {
                    const newText = targetText.slice(0, prev.length + 1);
                    if (newText === targetText) {
                        clearInterval(interval); // Arrêter l'intervalle une fois que le texte est complet
                    }
                    return newText; // Continuer à ajouter le texte
                });
            }, 75); // Vitesse d’apparition légèrement plus lente
        }

        return () => clearInterval(interval);
    }, [displayedText, targetText, isDeleting]);

    const handleButtonClick = (newText) => {
        if (newText === targetText) {
            // Si le texte est déjà affiché, relancer l'animation
            setIsDeleting(true);
           
            setTargetText('Roadmap'); // Assurez-vous que targetText est toujours à jour
        } else {
            setIsDeleting(true);
            setTargetText(newText);
        }
    };

    return (
        <div className="content-wrapper flex flex-col items-center md:items-start mt-52 md:mt-0">
            <div className="flex flex-col items-center md:items-start">
                <h1 className="staatliches text-[200px] lg:text-[300px] tracking-tighter text-orange-600 rotate-90 md:rotate-0 leading-none drop-shadow-lg">
                    {displayedText}
                </h1>
                <div className="mt-52 md:mt-0 flex flex-col items-center md:items-start md:flex-row space-y-4 md:space-y-0 md:space-x-4 z-20">
                    <ButtonReact onClick={() => handleButtonClick('React')}></ButtonReact>
                    <ButtonSymfony onClick={() => handleButtonClick('Symfony')}></ButtonSymfony>
                </div>
            </div>
            <div className='mt-12'>
                {targetText === 'React' && <ModalReact 
                    title="React" 
                    icon={faReact} 
                    fullText=" React est une bibliothèque JavaScript open-source utilisée pour la création d'interfaces utilisateur. Elle est maintenue par Facebook et une communauté de développeurs individuels et d'entreprises. React peut être utilisé comme base dans le développement d'applications à page unique ou mobiles, en raison de sa capacité à gérer rapidement les données qui changent avec le temps." 
                />}

                {/* {targetText === 'Symfony' && <ModalReact 
                    title="Symfony" 
                    icon={faSymfony} 
                    fullText="Symfony est un ensemble de composants PHP ainsi qu'un framework MVC libre écrit en PHP. Il fournit des fonctionnalités modulables et adaptables qui permettent de faciliter et d'accélérer le développement d'un site web. Symfony est publié sous la licence MIT."
                    isDeleting={isDeleting}
                    setIsDeleting={setIsDeleting}
                />} */}

                <ModalReact 
                    title="Symfony" 
                    icon={faSymfony} 
                    fullText="Symfony est un ensemble de composants PHP ainsi qu'un framework MVC libre écrit en PHP. Il fournit des fonctionnalités modulables et adaptables qui permettent de faciliter et d'accélérer le développement d'un site web. Symfony est publié sous la licence MIT."
                    isDeleting={isDeleting}
                    setIsDeleting={setIsDeleting}
                />
            </div>
        </div>
    );
};

export default Roadmap;
