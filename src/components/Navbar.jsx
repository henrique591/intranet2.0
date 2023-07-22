
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';


const Navbar = () => { 
    const[menuOpen, setMenuOpen] = useState(false)


    return (
        <nav>
            <Link to="/" className='title'>
                Alpha
            </Link>

            <div className="menu" onClick={() =>{
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li >
                    <NavLink to="/">Home</NavLink>
                </li>
                <li >
                    <NavLink to="sobre">Sobre</NavLink>
                </li>
                <li >
                    <NavLink to="aviso">Aviso</NavLink>
                </li>
                <li >
                    <NavLink to="Links">Links</NavLink>
                </li>
                <li >
                    <NavLink to="telefones">Telefones</NavLink>
                </li>
                <li >
                    <NavLink to="escalas">Escalas</NavLink>
                </li>
                <li >
                    <NavLink to="setores">Setores</NavLink>
                </li>
                <li >
                    <NavLink to="emails">Emails</NavLink>
                </li>
            </ul>
        </nav>

    );
};

export default Navbar;





           