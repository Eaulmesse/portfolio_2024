import React, {useState} from 'react'
import BurgerButton from "./BurgerButton"


function Navbar() {
    const [toggleBurger, setToggleBurger] = useState(false);

    const handleClick= () => {
        setToggleBurger(!toggleBurger);
        console.log(toggleBurger);
    }

    return (
        <>
            <BurgerButton toggleBurger={toggleBurger} onClick={handleClick}></BurgerButton>
        </>
    )


}

export default Navbar