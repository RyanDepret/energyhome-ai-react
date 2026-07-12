import './Footer.css'

function Footer() {
  return (
<footer id="footer">
  <div className="footer-top">

    <div className="footer-logo">
      <h2>EnergyHome AI</h2>
      <p>Votre partenaire énergétique</p>
    </div>

    <div className="footer-links">
      <h3>Liens Utiles</h3>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">À Propos</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div className="footer-social">
      <h3>Suivez-nous</h3>
      <i className="fab fa-facebook"></i>
      <i className="fab fa-twitter"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-linkedin"></i>
    </div>

    </div>
    <div className="footer-bottom">
      <p>© 2026 EnergyHome AI</p>
    <ul>
      <li><a href="#">Mentions légales</a></li>
      <li><a href="#">Politique de confidentialité</a></li>
    </ul>
  </div>
</footer>
)
}

export default Footer