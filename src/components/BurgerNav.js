import React from 'react'
import logo from '../assets/images/logo.png'
import { Squeeze as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './BurgerNav.css'

const BurgerNav = () => {
  const [classes, setClasses] = useState('menu-container')

  return (
    <div className="body">
      <div className="nav-small">
        <div className={classes}>
          <Hamburger
            size="30"
            color="white"
            onToggle={() =>
              setClasses(
                classes === 'menu-container'
                  ? 'menu-container change'
                  : 'menu-container'
              )
            }
          />
          <div className="navigation">
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
              style={{
                color: 'red',
              }}
            >
              <ul>
                <li></li>
              </ul>
            </NavLink>
            <NavLink
              to="/earth"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <ul>
                <li>earth</li>
              </ul>
            </NavLink>
            <NavLink
              to="/jupiter"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <ul>
                <li>jupiter</li>
              </ul>
            </NavLink>
            <NavLink
              to="/mars"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <ul>
                <li>mars</li>
              </ul>
            </NavLink>
            <NavLink
              to="/mercury"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <ul>
                <li>mercury</li>
              </ul>
            </NavLink>
            <NavLink
              to="/moon"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <ul>
                <li>moon</li>
              </ul>
            </NavLink>
            <NavLink
              to="/neptune"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <ul>
                <li>neptune</li>
              </ul>
            </NavLink>
            <NavLink
              to="/pluto"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <ul>
                <li>pluto</li>
              </ul>
            </NavLink>
            <NavLink
              to="/saturn"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <ul>
                <li>saturn</li>
              </ul>
            </NavLink>
            <NavLink
              to="/sun"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <ul>
                <li>sun</li>
              </ul>
            </NavLink>
            <NavLink
              to="/uranus"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <ul>
                <li>uranus</li>
              </ul>
            </NavLink>
            <NavLink
              to="/venus"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <ul>
                <li>venus</li>
              </ul>
            </NavLink>
          </div>
        </div>

        <a href="/" className="logo">
          <img className="logo-icon" src={logo} alt="" />
          <span className="logo-text">SolaireSystème</span>
        </a>
      </div>

      <div className="nav-big">
        <a href="/" className="logo">
          <img className="logo-icon" src={logo} alt="" />
          <span>SolaireSystème</span>
        </a>

        <div className="navigation">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
            style={{
              color: 'red',
            }}
          >
            <ul>
              <li></li>
            </ul>
          </NavLink>
          <NavLink
            to="/earth"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <ul>
              <li>earth</li>
            </ul>
          </NavLink>
          <NavLink
            to="/jupiter"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <ul>
              <li>jupiter</li>
            </ul>
          </NavLink>
          <NavLink
            to="/mars"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <ul>
              <li>mars</li>
            </ul>
          </NavLink>
          <NavLink
            to="/mercury"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <ul>
              <li>mercury</li>
            </ul>
          </NavLink>
          <NavLink
            to="/moon"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <ul>
              <li>moon</li>
            </ul>
          </NavLink>
          <NavLink
            to="/neptune"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <ul>
              <li>neptune</li>
            </ul>
          </NavLink>
          <NavLink
            to="/pluto"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <ul>
              <li>pluto</li>
            </ul>
          </NavLink>
          <NavLink
            to="/saturn"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <ul>
              <li>saturn</li>
            </ul>
          </NavLink>
          <NavLink
            to="/sun"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <ul>
              <li>sun</li>
            </ul>
          </NavLink>
          <NavLink
            to="/uranus"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <ul>
              <li>uranus</li>
            </ul>
          </NavLink>
          <NavLink
            to="/venus"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <ul>
              <li>venus</li>
            </ul>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default BurgerNav
