import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {  } from 'react-router-dom'

const Header = () => {
  
  const location = useLocation()
  
  return (
    <header className="header">
      <div className="header-content">
        <div className="nav-wrapper">
          <div className="nav-title">Will Carter: Full Stack Web Developer</div>
          <div className="nav">
            <ul>
              <li><Link to={ location.pathname === '/about' ? '/' : '/about' }>{ location.pathname === '/about' ? 'Portfolio' : 'About' }</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
