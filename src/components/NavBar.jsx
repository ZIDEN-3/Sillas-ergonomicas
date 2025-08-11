import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import '../styles/NavBar.css';


function NavBar () {
const [isOpen, setIsOpen] = useState(false); 

const AbrirMenu = () => {
  setIsOpen(!isOpen)
} 

    return (
      <nav>
        <ul className='navUl'>
          <li className='navLi'><Link to='/'>Inicio</Link></li>
          <li className='navLiM'>
            <button className='btn-nav' onClick={AbrirMenu}>Marcas▾</button>
          {isOpen && (
          <ul className='navUlM'>
            <li className='navLi'><Link to='/Silla-ergonomica-Herman-Miller'>Herman Miller</Link></li>
            <li className='navLi'><Link to='/Silla-ergonomica-Steel-case-series-1'>Steel Case</Link></li>
              <li className='navLi'><Link to='/Silla-ergonomica-Sihoo-M18'>Sihoo</Link></li>
            <li className='navLi'><Link to='/Silla-ergonomica-Songmics-OBN86BK'>Songmics</Link></li>
            <li className='navLi'><Link to='/Silla-ergonomica-ErgoHuman'>Ergo Human</Link></li>
            <li className='navLi'><Link to='/Silla-ergonomica-Hbada-Ergonomic-Office-Chair'>Hbada</Link></li>
          </ul>
          )}
          
          </li>
          </ul>
      </nav>
    )
}

export default NavBar;