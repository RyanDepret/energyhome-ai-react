import Header from './components/Header'
import Hero from './components/Hero'
import Simulateur from './components/Simulateur'
import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header titre="EnergyHome AI" />
      <Hero />
      <Simulateur />
      <Features />
      <Footer />
    </div>
  )
}

export default App