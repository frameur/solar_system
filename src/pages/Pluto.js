import React from 'react'
import pluto1 from '../assets/images/planet_pluto.png'
import pluto2 from '../assets/images/pluto.jpg'
import Footer from '../components/Footer'
import BurgerNav from '../components/BurgerNav'
// import { motion } from 'framer-motion'

const Pluto = () => {
  return (
    <div>
      <header>
        <BurgerNav />
      </header>
      <div className="container">
        <div className="fade">
          <img className="showcase" src={pluto1} alt="" />
          <div className="overlay">
            <div className="main-text">
              <h1>Pluton</h1>
              <p>
                Pluton est une planète naine dans la ceinture de Kuiper, un
                anneau de corps au-delà de l'orbite de Neptune. C'était le
                premier et le plus grand objet de la ceinture de Kuiper à être
                découvert. Après la découverte de Pluton en 1930, elle a été
                déclarée être la neuvième planète à partir du Soleil. À partir
                des années 1990, son statut de planète a été remis en cause
                suite à la découverte de plusieurs objets de taille similaire
                dans la ceinture de Kuiper et le disque épars, dont la planète
                naine Éris.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content pluto">
          <div className="text">
            <div className="inner-text">
              <h1>Dieu des enfers</h1>
              <p>
                Pluton tire son nom de Venetia Burney, âgée de 11 ans, d'Oxford,
                en Angleterre, qui a suggéré à son grand-père que le nouveau
                monde tire son nom du dieu romain des enfers.
              </p>
            </div>
          </div>
          <div>
            <img className="image" src={pluto2} alt="" />{' '}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Pluto
