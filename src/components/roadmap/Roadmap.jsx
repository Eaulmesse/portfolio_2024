import React, { useState, useEffect } from 'react';
import DisplayedTechnologie from './DisplayedTechnologie';
import CardTechnologie from './CardTechonologie';
import Timeline from './Timeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// Card icons
import { faSymfony } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'

import {faArrowTrendUp} from '@fortawesome/free-solid-svg-icons'

const Roadmap = () => {
    
    return (
        <div className='content-wrapper space-y-3 md:flex'>  
            <div>
                <div className='h-96 md:h-auto' >
                    <DisplayedTechnologie></DisplayedTechnologie>
                </div>
                
                <div className='space-y-3 flex flex-col md:space-y-5 '>
                    <div className='flex md:items-center w-52 space-x-2 m-auto md:m-0 text-green-500'>
                        <h2 className='text-3xl md:text-6xl staatliches drop-shadow-md tracking-tighter'>My skills</h2>
                        <FontAwesomeIcon className='text-3xl md:text-6xl md:mt-14' icon={faArrowTrendUp}></FontAwesomeIcon>
                    </div> 
                    
                    <div className='m-auto space-y-3 md:m-0 md:space-y-0 md:flex md:space-x-4'>
                        <CardTechnologie icon={faSymfony} tech={"Symfony"}></CardTechnologie>
                        <CardTechnologie icon={faReact} tech={"React"}></CardTechnologie>
                        <CardTechnologie icon={faGithub} tech={"Github"}></CardTechnologie>
                        <CardTechnologie icon={faFigma} tech={"Figma"}></CardTechnologie>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <Timeline></Timeline>
            </div>
            

            
        </div>
    );
};


export default Roadmap;
