import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Simulateur from './components/Simulateur'
import Features from './components/Features'
import Footer from './components/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Header titre="EnergyHome AI" />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Simulateur />
            <Features />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App