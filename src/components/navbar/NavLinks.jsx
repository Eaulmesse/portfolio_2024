import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
    const links = [
        { path: '/', text: 'Home' },
        { path: '/roadmap', text: 'Roadmap' },
        { path: '/experiences', text: 'Experiences' },
        { path: '/contact', text: 'Contact' },
    ];

    return (
        <nav className="flex flex-col items-center text-white pt-12 space-y-3 sm:space-y-0 sm:pt-4 sm:flex-row z-50">
            <p className="abril-fatface text-xl">Theo Guerin</p>

            {links.map((link, index) => (

                <div className="w-3/5 px-4 py-2 border-2 text-lg be-vietnam-pro-regular sm:w-auto  sm:border-0">
                    <NavLink
                    key={index}
                    to={link.path}
                    className={({ isActive }) => 
                        isActive ? "nav-link active" : "nav-link"
                    }
                    >
                        {link.text}
                    </NavLink>
                </div>
                
            ))}
        </nav>
    );
}

export default NavLinks;
