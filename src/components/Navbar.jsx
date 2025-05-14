import React from 'react';
import './Navbar.css';
import logoText from '../logoText.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {

   const handleClick = () => {
  window.open('https://purab107.github.io/SORTERA/', '_blank', 'noopener,noreferrer');
};
    return (
        <>
            <nav className='main-nav'>
                <span className='logo'>
                    <Link to="/">
                        <img src={logoText} className="img-logo" alt="Logo" />
                    </Link>
                </span>
                <div className='menu-links'>
                    <ul>
                        <li>
                            <NavLink to="/documentation" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Documentation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/bubblesort" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Bubble Sort
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/selectionsort" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Selection Sort
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/insertionsort" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Insertion Sort
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/quicksort" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Quick Sort
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/mergesort" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Merge Sort
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <span>
                    <button className='nav-button' onClick={handleClick}><span>Try Now</span></button>
                </span>
            </nav>
        </>
    );
};

export default Navbar;
