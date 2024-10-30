import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/recipe/createrecipe">Create Recipe</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
            </ul>
        </nav>
    );
}
