import React from 'react'
import saturn1 from '../assets/images/planet_saturn.png'
import saturn2 from '../assets/images/saturn.jpg'
import Footer from '../components/Footer'
import BurgerNav from '../components/BurgerNav'
// import { motion } from 'framer-motion'

const Saturn = () => {
  return (
    <div>
      {' '}
      <header>
        <BurgerNav />
      </header>
      <div className="container">
        <div className="fade">
          <img className="showcase" src={saturn1} alt="" />
          <div className="overlay">
            <div className="main-text">
              <h1>Saturne</h1>
              <p>
                Saturne est la sixième planète à partir du Soleil et la deuxième
                plus grande du système solaire, après Jupiter. C'est une géante
                gazeuse avec un rayon moyen d'environ neuf fois et demi celui de
                la Terre. Il n'a qu'un huitième de la densité moyenne de la
                Terre; cependant, avec son plus grand volume, Saturne est plus
                de 95 fois plus massive.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content saturn">
          <div className="text">
            <div className="inner-text">
              <h1>Dieu de la richesse et de l'agriculture</h1>
              <p>
                Saturne porte le nom du dieu romain de la richesse et de
                l'agriculture ; son symbole astronomique (♄) représente la
                faucille du dieu.
              </p>
            </div>
          </div>
          <div>
            <img className="image" src={saturn2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Saturn
