import React from 'react'
import '@component/app/page.module.css'

const Header = () => {
  return (
    <nav>
      <div className="menu">
        <div className="container">
        <div>
          <a href="#home"><img src={"/assets/logo-bg.png"} alt="logo" height="80" /></a>
        </div>
        <div className="navlist">
          <ul id="list">
            <li><a href="#home">Home</a></li>
            <li><a href="#text">About</a></li>
            <li><a href="#form">Contact</a></li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Header