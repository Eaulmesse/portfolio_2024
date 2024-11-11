import React, { useState, useEffect } from 'react';
import DisplayedTechnologie from './DisplayedTechnologie';
import CardTechnologie from './CardTechonologie';
import MyOffer from './MyOffer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// Card icons
import { faSymfony } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'

import {faArrowTrendUp} from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Roadmap = () => {
    
    return (
        <div className='content-wrapper mb-10'>  
            <div>
                <div className='h-96 sm:h-56 lg:h-72 w-5/6 m-auto sm:m-0' >
                    <DisplayedTechnologie></DisplayedTechnologie>
                </div>
                

                <div className='lg:flex lg:mt-10'>
                    <div className='w-5/6 m-auto sm:m-0  space-y-3 flex flex-col sm:space-y-5 '>
                        <div className='flex w-full space-x-2 m-auto sm:m-0 text-gray-200 bg-gray-800 w-fit p-2 rounded-lg drop-shadow-lg'>
                            <h2 className='text-3xl  be-vietnam-pro-medium drop-shadow-sm tracking-tighter'>My skills</h2>
                            <FontAwesomeIcon className='text-3xl' icon={faArrowTrendUp}></FontAwesomeIcon>
                        </div> 
                        
                        <div className='flex flex-col items-center sm:flex-row sm:flex-wrap justify-center sm:justify-start '>
                            <CardTechnologie icon={faSymfony} tech={"Symfony"}></CardTechnologie>
                            <CardTechnologie icon={faReact} tech={"React"}></CardTechnologie>
                            <CardTechnologie icon={faGithub} tech={"Github"}></CardTechnologie>
                            <CardTechnologie icon={faFigma} tech={"Figma"}></CardTechnologie>
                        </div>
                    </div>

                    <div className='w-5/6 m-auto sm:m-0 space-y-3 flex flex-col  sm:space-y-5'>
                        <MyOffer></MyOffer>
                    </div>

                </div>
                    
            </div>

            
        </div>
    );
};


export default Roadmap;
