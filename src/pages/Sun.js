import React from 'react'
import sun1 from '../assets/images/the_sun.png'
import sun2 from '../assets/images/sun.jpg'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import BurgerNav from '../components/BurgerNav'

const Sun = () => {
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
          <img className="showcase" src={sun1} alt="" />
          <div className="overlay">
            <div className="main-text">
              <h1>Soleil</h1>
              <motion.p>
                Le Soleil est l'étoile au centre du système solaire. C'est une
                sphère presque parfaite de plasma chaud, chauffée jusqu'à
                incandescence par des réactions de fusion nucléaire dans son
                noyau, rayonnant l'énergie principalement sous forme de lumière
                visible, de lumière ultraviolette et de rayonnement infrarouge.
                C'est de loin la source d'énergie la plus importante pour la vie
                sur Terre. Son diamètre est d'environ 1,39 million de kilomètres
                (864 000 milles), soit 109 fois celui de la Terre. Sa masse est
                d'environ 330 000 fois celle de la Terre ; il représente environ
                99,86% de la masse totale du système solaire
              </motion.p>
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
        <div className="content sun">
          <div className="text">
            <div className="inner-text">
              <h1>Solis</h1>
              <p>
                Solis signifie soleil en latin. Bien qu'il s'agisse d'une
                étoile, le soleil n'a pas de nom propre généralement accepté et
                unique en anglais. Les anglophones l'appellent toujours le
                soleil.
              </p>
            </div>
          </div>
          <div>
            <img className="image" src={sun2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sun
