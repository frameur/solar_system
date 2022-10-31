import React from 'react'
import neptune1 from '../assets/images/planet_neptune.png'
import neptune2 from '../assets/images/neptune.jpg'
import Footer from '../components/Footer'
import BurgerNav from '../components/BurgerNav'
// import { motion } from 'framer-motion'

const Neptune = () => {
  return (
    <div>
      <header>
        <BurgerNav />
      </header>
      <div className="container">
        <div className="fade">
          <img className="showcase" src={neptune1} alt="" />
          <div className="overlay">
            <div className="main-text">
              <h1>Neptune</h1>
              <p>
                Neptune est la huitième planète solaire connue et la plus
                éloignée du Soleil. Dans le système solaire, c'est la quatrième
                plus grande planète en diamètre, la troisième planète la plus
                massive et la planète géante la plus dense. C'est 17 fois la
                masse de la Terre, légèrement plus massive que sa quasi-jumelle
                Uranus. Neptune est plus dense et physiquement plus petite
                qu'Uranus car sa plus grande masse provoque une plus grande
                compression gravitationnelle de son atmosphère.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content neptune">
          <div className="text">
            <div className="inner-text">
              <h1>Neptune</h1>
              <p>
                Il porte le nom du dieu romain de la mer et porte le symbole
                astronomique ♆, une version stylisée du trident du dieu Neptune.
              </p>
            </div>
          </div>
          <div>
            <img className="image" src={neptune2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Neptune
