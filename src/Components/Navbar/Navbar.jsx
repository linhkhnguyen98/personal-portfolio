import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import initialIcon from '../assets/logo-2.svg';
import darkModeIcon from '../assets/logo-darkMode.svg';
// import resumePDF from '../src/Components/assets/Main-Resume.pdf';

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    return (
        <nav className='navbar'>
            <NavLink to="/">
                <img src={isDarkMode ? darkModeIcon : initialIcon} alt="Initial Icon" className='initial-logo'/>
            </NavLink>

            
            <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><a href="/Main-Resume.pdf" download="Linh-Resume.pdf">Download CV</a></li>
            </ul>

            {/* icon for light/dark mode */}
            <div className='theme-toggle'>
                {isDarkMode ? 
                    <MdLightMode onClick={()=> {setIsDarkMode(!isDarkMode)}}/>
                    :
                    <FaMoon onClick={()=>{setIsDarkMode(!isDarkMode)}}/>
                }
            </div>
        </nav>
    )
}

export default Navbar