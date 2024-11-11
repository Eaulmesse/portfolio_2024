import React, {useState} from 'react'
import BurgerButton from "./BurgerButton"
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';


function Navbar() {
    const [toggleBurger, setToggleBurger] = useState(false);

    const handleClick= () => {
        setToggleBurger(!toggleBurger);
        console.log(toggleBurger);
    }

    return (
        <div className='content-wrapper'>
            <div className='sm:hidden'>
                <BurgerButton toggleBurger={toggleBurger} onClick={handleClick}></BurgerButton>
            </div>

            <div className='hidden sm:flex'>
                <NavLinks></NavLinks>
            </div>
            

            {toggleBurger && <MobileMenu></MobileMenu>}
            
        </div>
    )


}

export default Navbar