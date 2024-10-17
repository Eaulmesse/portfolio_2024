import "../../index.css"
import React, {useState} from 'react'

function BurgerButton({ toggleBurger, onClick}) {
    return (
        <>
            <div onClick={onClick} className="flex flex-col items-center w-20 mt-5">
                <div id="top-burger"></div>
                <div id="middle-burger"></div>
                <div id="bottom-burger"></div>
            </div>
        </>
    )


}

export default BurgerButton