import React, { useState, useEffect } from 'react';


const DisplayedTechnologie = () => {

    const technologies = ['React', 'Symfony','Figma', 'Github', 'Docker',];
    const [displayedText, setDisplayedText] = useState('');
    const [techIndex, setTechIndex] = useState(0); // Indice pour parcourir le tableau des technologies
    const [isDeleting, setIsDeleting] = useState(false);

    // Effet pour écrire ou supprimer progressivement le texte
    useEffect(() => {
        if (!isDeleting && displayedText === technologies[techIndex]) {
            // Le texte est complètement affiché, on attend puis on commence la suppression
            setTimeout(() => setIsDeleting(true),5000);
        } else if (isDeleting && displayedText === '') {
            // Le texte est complètement supprimé, on passe au prochain mot
            setIsDeleting(false);
            setTechIndex((prevIndex) => (prevIndex + 1) % technologies.length);
        } else {
            // Ajouter ou supprimer une lettre à chaque intervalle
            const interval = setInterval(() => {
                setDisplayedText((prev) => {
                    return isDeleting
                        ? prev.slice(0, -1) // Supprimer une lettre
                        : technologies[techIndex].slice(0, prev.length + 1); // Ajouter une lettre
                });
            }, 100);
            return () => clearInterval(interval);
        }
    }, [displayedText, isDeleting, techIndex]);

    return (
        <div className="content-wrapper flex flex-col items-center md:items-start mt-52 md:mt-0">
            <h1 className="staatliches text-[200px] lg:text-[300px] tracking-tighter text-green-500 rotate-90 md:rotate-0 leading-none drop-shadow-lg">
                {displayedText}
            </h1>
        </div>
    );
};

export default DisplayedTechnologie;