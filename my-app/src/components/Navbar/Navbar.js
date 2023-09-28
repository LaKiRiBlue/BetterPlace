import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
 
const Navbar = () => {
    
    return (
        <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/category">Recipes</Link>
        <Link to="/diary">Diary</Link>
        </div>
    );
    };
    export default Navbar;

