import React, {useState} from 'react'
import BurgerButton from "./BurgerButton"
import MobileMenu from './MobileMenu';


function Navbar() {
    const [toggleBurger, setToggleBurger] = useState(false);

    const handleClick= () => {
        setToggleBurger(!toggleBurger);
        console.log(toggleBurger);
    }

    return (
        <>
            <BurgerButton toggleBurger={toggleBurger} onClick={handleClick}></BurgerButton>

            {toggleBurger && <MobileMenu></MobileMenu>}
            
        </>
    )


}

export default Navbar