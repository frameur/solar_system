import React from 'react'
import Slideswipper from '../components/Slideswipper'
import { motion } from 'framer-motion'
import BurgerNav from '../components/BurgerNav'

const Home = () => {
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
        class="container"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
      >
        <div className="showcase">
          <div className="overlay">
            <div className="main-text">
              <h1>Le système Solaire</h1>
              <motion.p>
                <h3>Pourquoi s'appelle-t-il le système solaire ?</h3> Il existe
                de nombreux systèmes planétaires comme le nôtre dans l'univers,
                avec des planètes en orbite autour d'une étoile hôte. Notre
                système planétaire est appelé "le système solaire" parce que
                nous utilisons le mot "solaire" pour décrire les choses liées à
                notre étoile, d'après le mot latin pour Soleil, "solis".
                <br />
                Notre système planétaire est situé dans un bras spiral extérieur
                de la galaxie de la Voie lactée.
                <br />
                Notre système solaire se compose de notre étoile, le Soleil, et
                de tout ce qui lui est lié par gravité - les planètes Mercure,
                Vénus, Terre, Mars, Jupiter, Saturne, Uranus et Neptune ; les
                planètes naines telles que Pluton ; des dizaines de lunes ; et
                des millions d'astéroïdes, de comètes et de météoroïdes. Au-delà
                de notre propre système solaire, nous avons découvert des
                milliers de systèmes planétaires en orbite autour d'autres
                étoiles dans la Voie lactée.
              </motion.p>
              <Slideswipper />
              <p className="footerHome">
                François Copyright © 2022 - {new Date().getFullYear()}{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
