import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
    const links = [
        { path: '/', text: 'Home' },
        { path: '/about', text: 'About Me' },
        { path: '/experiences', text: 'Experiences' },
        { path: '/contact', text: 'Contact' },
    ];

    return (
        <nav className="flex flex-col items-center text-white pt-12 space-y-3">
            {links.map((link, index) => (

                <div className="w-3/5 px-4 py-2 border-2 text-lg be-vietnam-pro-regular">
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
