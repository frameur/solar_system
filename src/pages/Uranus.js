import React from 'react'
import uranus1 from '../assets/images/planet_uranus.png'
import uranus2 from '../assets/images/uranus.jpg'
import Footer from '../components/Footer'
import BurgerNav from '../components/BurgerNav'
// import { motion } from 'framer-motion'

const Uranus = () => {
  return (
    <div>
      <header>
        <BurgerNav />
      </header>
      <div className="container">
        <div className="fade">
          <img className="showcase" src={uranus1} alt="" />
          <div className="overlay">
            <div className="main-text">
              <h1>Uranus</h1>
              <p>
                Uranus est la septième planète à partir du Soleil. Il a le
                troisième plus grand rayon planétaire et la quatrième plus
                grande masse planétaire du système solaire. Uranus a une
                composition similaire à Neptune, et les deux ont des
                compositions chimiques en vrac qui diffèrent de celles des plus
                grandes géantes gazeuses Jupiter et Saturne.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content uranus">
          <div className="text">
            <div className="inner-text">
              <h1>Dieu du ciel</h1>
              <p>
                Son nom fait référence au dieu grec du ciel, Uranus, qui, selon
                la mythologie grecque, était l'arrière-grand-père d'Ares (Mars),
                grand-père de Zeus (Jupiter) et père de Cronos (Saturne).
              </p>
            </div>
          </div>
          <div>
            <img className="image" src={uranus2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Uranus
