import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = (props) => (
    <header id="header" className="container rounded p-2 mt-2">
        <nav className="nav justify-content-center">
            <ul className="nav fw-bold fs-4">
                <li className="nav-item me-4">
                    <NavLink className="nav-link active text-dark" to="/">Mes tâches</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default navbar;