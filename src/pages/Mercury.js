import React from 'react'
import mercury1 from '../assets/images/planet_mercury.png'
import mercury2 from '../assets/images/mercury.jpg'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import BurgerNav from '../components/BurgerNav'

const Mercury = () => {
  return (
    <div>
      <header>
        <BurgerNav />
      </header>
      <div
        className="container"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
      >
        <div className="fade">
          <img className="showcase" src={mercury1} alt="" />
          <div className="overlay">
            <div className="main-text">
              <h1>Mercure</h1>
              <motion.p>
                Mercure est la plus petite planète du système solaire et la plus
                proche du Soleil. Son orbite autour du Soleil prend 87,97 jours
                terrestres, la plus courte de toutes les planètes du Soleil.
                Comme Vénus, Mercure orbite autour du Soleil dans l'orbite de la
                Terre en tant que planète inférieure, et sa distance apparente
                du Soleil vue de la Terre ne dépasse jamais 28°.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="container"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
      >
        <div className="content mercury">
          <div className="text">
            <div className="inner-text">
              <h1>Dieu du Commerce</h1>
              <p>
                Il porte le nom du dieu romain Mercurius (Mercure), dieu du
                commerce, messager des dieux et médiateur entre les dieux et les
                mortels, correspondant au dieu grec Hermès (Ἑρμῆς).
              </p>
            </div>
          </div>
          <div>
            <img className="image" src={mercury2} alt="" />
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}

export default Mercury
