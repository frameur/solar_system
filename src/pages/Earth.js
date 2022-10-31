import React from 'react'
import earth1 from '../assets/images/planet_earth.png'
import earth2 from '../assets/images/earth_extra.jpg'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import BurgerNav from '../components/BurgerNav'

const Earth = () => {
  return (
    <div>
      <header
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
      >
        <BurgerNav />
      </header>
      <div
        className="container"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.9 } }}
      >
        <div className="fade">
          <motion.div>
            <img className="showcase" src={earth1} alt="" />
          </motion.div>
          <div className="overlay">
            <div className="main-text">
              <h1>Terre</h1>
              <p>
                La Terre est la troisième planète à partir du Soleil et le seul
                objet astronomique connu pour abriter et soutenir la vie.
                Environ 29,2% de la surface de la Terre est constituée de
                continents et d'îles. Les 70,8 % restants sont recouverts d'eau,
                principalement par les océans, les mers, les golfes et d'autres
                masses d'eau salée, mais aussi par des lacs, des rivières et
                d'autres eaux douces, qui constituent ensemble l'hydrosphère.
                Une grande partie des régions polaires de la Terre sont
                recouvertes de glace. .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
      >
        <div className="content earth">
          <div className="text">
            <div className="inner-text">
              <h1>Terre</h1>
              <p>
                Toutes les planètes, à l'exception de la Terre, ont été nommées
                d'après des dieux et des déesses grecs et romains. Le nom Earth
                est un nom anglais/allemand qui signifie simplement le sol. Il
                vient des vieux mots anglais « eor(th)e » et « ertha ».
              </p>
            </div>
          </div>
          <div>
            <img className="image" src={earth2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Earth
