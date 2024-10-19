import React from 'react';
import NavLinks from './NavLinks';

function MobileMenu() {
    return (
        <>
            <div className="w-auto pt-6 pb-1 bg-zinc-900">
                <NavLinks></NavLinks>
                <div className='white-line'></div>
            </div>
        </>
    );

}

export default MobileMenu;