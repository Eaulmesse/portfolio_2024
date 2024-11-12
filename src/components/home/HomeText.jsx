import React from 'react';
import ContactButton from '../misc/ContactButton';


const HomeText = () => {
    return (
        <>  
            <h1 className='be-vietnam-pro-regular text-white text-xl md:text-5xl mb-2'>About me.</h1>
            <ContactButton></ContactButton>

            <p className='be-vietnam-pro-regular text-white text-lg mt-5 md:text-xl'>I am a freelance developer based in Paris, France. I have been working in the tech industry for over 10 years. I have a strong background in web development and I am always looking for new challenges. I am currently available for new projects. Feel free to contact me if you have any questions or if you would like to work with me.</p>
        </>
    );
};

export default HomeText;