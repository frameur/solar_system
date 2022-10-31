import React from 'react'
import jupiter1 from '../assets/images/planet_jupiter.png'
import jupiter2 from '../assets/images/jupiter.jpg'
import Footer from '../components/Footer'
import BurgerNav from '../components/BurgerNav'
// import { motion } from 'framer-motion'

const Jupiter = () => {
  return (
    <div>
      <header>
        <BurgerNav />
      </header>
      <div className="container">
        <div className=" fade">
          <img className="showcase" src={jupiter1} alt="" />
          <div className="overlay">
            <div className="main-text">
              <h1>Jupiter</h1>
              <p>
                Jupiter est la cinquième planète à partir du Soleil et la plus
                grande du système solaire. C'est une géante gazeuse dont la
                masse est plus de deux fois et demie celle de toutes les autres
                planètes du système solaire combinées, mais légèrement
                inférieure à un millième de la masse du Soleil. Jupiter est le
                troisième objet naturel le plus brillant du ciel nocturne de la
                Terre après la Lune et Vénus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content jupiter">
          <div className="text">
            <div className="inner-text">
              <h1>Roi des dieux</h1>
              <p>
                Il a été observé depuis la préhistoire et porte le nom du dieu
                romain Jupiter, le roi des dieux, en raison de sa taille
                observée.
              </p>
            </div>
          </div>
          <div>
            <img className="image" src={jupiter2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Jupiter
