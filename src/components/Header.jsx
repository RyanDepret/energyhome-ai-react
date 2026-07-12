import './Header.css'

function Header({ titre }) {
  return (
    <header className="header">
      <span>{titre}</span>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À Propos</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <a href="#" className="nav-btn">Contactez-nous</a>
    </header>
  )
}

export default Header