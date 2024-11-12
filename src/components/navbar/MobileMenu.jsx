import React from 'react';
import NavLinks from './NavLinks';

function MobileMenu() {
    return (
        <>
            <div className="w-full pt-6 pb-1 card-gradient drop-shadow-lg">
                <NavLinks></NavLinks>
                <div className='white-line'></div>
            </div>
        </>
    );

}

export default MobileMenu;