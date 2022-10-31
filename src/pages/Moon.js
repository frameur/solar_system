import React from 'react'
import moon1 from '../assets/images/planet_moon.png'
import moon2 from '../assets/images/moon.jpg'
import Footer from '../components/Footer'
import BurgerNav from '../components/BurgerNav'
// import { motion } from 'framer-motion'

const Moon = () => {
  return (
    <div>
      <header>
        <BurgerNav />
      </header>
      <div className="container">
        <div className="fade">
          <img className="showcase" src={moon1} alt="" />
          <div className="overlay">
            <div className="main-text">
              <h1>Lune</h1>
              <p>
                La Lune est en rotation synchrone avec la Terre, lui montrant
                donc constamment la même face. Celle-ci, appelée face visible,
                est marquée par des mers lunaires volcaniques sombres qui
                remplissent les espaces entre les hautes terres claires et ses
                cratères d'impact proéminents. Réciproquement, elle possède une
                face cachée, qui présente moins de mers mais beaucoup plus de
                cratères, dont le bassin Pôle Sud-Aitken, le plus grand du
                satellite et l'un des plus grands du Système solaire par son
                diamètre de 2 500 km. Elle est dépourvue d'atmosphère dense et
                de champ magnétique. Son influence gravitationnelle sur la Terre
                produit les marées océaniques, les marées terrestres, un léger
                allongement de la durée du jour et la stabilisation de
                l'inclinaison de l'axe terrestre.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content moon">
          <div className="text">
            <div className="inner-text">
              <h1>Satellite de la terre</h1>
              <p>
                La Lunea, dite aussi Terre Ib, est l'unique satellite naturel
                permanent de la planète Terre. Il s'agit du cinquième plus grand
                satellite naturel du Système solaire, et du plus grand des
                satellites planétaires par rapport à la taille de la planète
                autour de laquelle il orbite. Elle est le deuxième satellite le
                plus dense du Système solaire après Io, un satellite de
                Jupiterc.
              </p>
            </div>
          </div>
          <div>
            {' '}
            <img className="image" src={moon2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Moon
