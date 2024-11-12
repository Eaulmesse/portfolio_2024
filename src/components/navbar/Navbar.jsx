import React, {useState} from 'react'
import BurgerButton from "./BurgerButton"
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';

import ContactButton from '../misc/ContactButton';


function Navbar() {
    const [toggleBurger, setToggleBurger] = useState(false);

    const handleClick= () => {
        setToggleBurger(!toggleBurger);
        console.log(toggleBurger);
    }

    return (
        <div className='flex items-center justify-between content-wrapper'>
            <div className=''>
                <div className='sm:hidden'>
                    <BurgerButton toggleBurger={toggleBurger} onClick={handleClick}></BurgerButton>
                </div>

                <div className='hidden sm:flex'>
                    <NavLinks></NavLinks>
                </div>
                

                {toggleBurger && <MobileMenu></MobileMenu>}
                
            </div>

            <div className='mt-4 mr-4 sm:mt-0 sm:mr-0'>
                <ContactButton></ContactButton>
            </div>
            
        </div>
    )


}

export default Navbar