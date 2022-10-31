import React from 'react'
import mars1 from '../assets/images/planet_mars.png'
import mars2 from '../assets/images/mars.jpg'
import Footer from '../components/Footer'
import BurgerNav from '../components/BurgerNav'
// import { motion } from 'framer-motion'

const Mars = () => {
  return (
    <div>
      <header>
        <BurgerNav />
      </header>
      <div className="container">
        <div className="fade">
          <img className="showcase" src={mars1} alt="" />
          <div className="overlay">
            <div className="main-text">
              <h1>Mars</h1>
              <p>
                Mars est la quatrième planète à partir du Soleil et la deuxième
                plus petite planète du système solaire, étant plus grande que
                Mercure. Ce dernier fait référence à l'effet de l'oxyde de fer
                présent à la surface de Mars, qui lui donne un aspect rougeâtre
                distinctif parmi les corps astronomiques visibles à l'œil nu.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content mars">
          <div className="text">
            <div className="inner-text">
              <h1>Dieu de la guerre</h1>
              <p>
                En anglais, Mars porte le nom du dieu romain de la guerre et est
                souvent appelée la "planète rouge".
              </p>
            </div>
          </div>
          <div>
            <img className="image" src={mars2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Mars
