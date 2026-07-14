import { Link } from 'react-router-dom'
import './Header.css'

function Header({ titre }) {
  return (
    <header className="header">
      <Link to="/">
        <span>{titre}</span>
      </Link>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À Propos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Link to="/contact" className="nav-btn">Contactez-nous</Link>
    </header>
  )
}

export default Header