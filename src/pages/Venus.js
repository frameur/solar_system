import React from 'react'
import venus1 from '../assets/images/planet_venus.png'
import venus2 from '../assets/images/planet_venus.jpg'
import Footer from '../components/Footer'
import BurgerNav from '../components/BurgerNav'
// import { motion } from 'framer-motion'

const Venus = () => {
  return (
    <div>
      <header>
        <BurgerNav />
      </header>
      <div className="container">
        <div className="fade">
          <img className="showcase" src={venus1} alt="" />
          <div className="overlay">
            <div className="main-text">
              <h1>Vénus</h1>
              <p>
                Vénus est la deuxième planète à partir du Soleil. En tant
                qu'objet naturel le plus brillant du ciel nocturne de la Terre
                après la Lune, Vénus peut projeter des ombres et peut être, en
                de rares occasions, visible à l'œil nu en plein jour. Vénus se
                trouve dans l'orbite de la Terre et ne semble donc jamais
                s'aventurer loin du Soleil, soit en se couchant à l'ouest juste
                après le crépuscule, soit en se levant à l'est un peu avant
                l'aube. Vénus tourne autour du Soleil tous les 224,7 jours
                terrestres.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content venus">
          <div className="text">
            <div className="inner-text">
              <h1>Déesse de l'amour et de la beauté</h1>
              <p>
                Il porte le nom de la déesse romaine de l'amour et de la beauté.
                Cependant, Vénus romaine avait de nombreuses capacités au-delà
                de l'Aphrodite grecque; elle était une déesse de la victoire, de
                la fertilité et même de la prostitution.
              </p>
            </div>
          </div>
          <div>
            <img className="image" src={venus2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Venus
