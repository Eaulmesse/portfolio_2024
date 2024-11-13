import React, { useState } from 'react';
import BurgerButton from "./BurgerButton";
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import ContactButton from '../misc/ContactButton';

function Navbar() {
    const [toggleBurger, setToggleBurger] = useState(false);

    const handleClick = () => {
        setToggleBurger(!toggleBurger);
    }

    return (
        <div className='flex items-center content-wrapper'>
            <div className='w-full relative'>
                
                <div className={`md:hidden transform transition-transform duration-300 absolute w-full z-50 ${toggleBurger ? 'translate-y-0' : '-translate-y-full'}`}>
                    <MobileMenu />
                </div>

                
                <div className='sm:hidden'>
                    <BurgerButton toggleBurger={toggleBurger} onClick={handleClick} />
                </div>

                <div className='hidden sm:flex'>
                    <NavLinks />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
