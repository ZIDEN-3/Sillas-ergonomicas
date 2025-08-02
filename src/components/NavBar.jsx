import { Link } from 'react-router-dom'
import '../styles/NavBar.css';


function NavBar () {
    return (
      <nav>
        <ul className='navUl'>
          <li className='navLi'><Link to='/'>Inicio</Link></li>
          </ul>
      </nav>
    )
}

export default NavBar;