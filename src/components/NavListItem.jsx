import React from 'react'

function NavListItem({ nav, onClick  }) {

    const closeMenu = () => {
        // Call onClick function passed from parent component
        onClick();
    };
    return (
        <li>
            <a href={nav.link} onClick={closeMenu}>{nav.name} </a>
        </li>
    )
}

export default NavListItem
