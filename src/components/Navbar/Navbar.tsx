import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__item'>
          <a className='navbar__link' href="/">Главная</a>
        </li>
        <li className='navbar__item'>
          <a className='navbar__link' href="/#me">Обо мне</a>
        </li>
        <li className='navbar__item'>
          <a className='navbar__link' href="/#stack">Мой стэк</a>
        </li>
        <li className='navbar__item'>
          <a className='navbar__link' href="/#projects">Портфолио</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar