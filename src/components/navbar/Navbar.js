import React from 'react';
import "../navbar/Navbar.css";
import {FaClipboardCheck } from "react-icons/fa";

function Navbar() {
    return (
        <nav className='navbar'>
            <span>Lista de tarefa <FaClipboardCheck></FaClipboardCheck></span>
        </nav>
    );
}

export default Navbar;
