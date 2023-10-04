"use client"
import React from 'react'
import '@component/app/page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()

  return (
    <nav>
      <div className="menu">
        <div className="container">
        <div>
          <a href="#home"><img src={"/assets/logo-bg.png"} alt="logo" height="80" /></a>
        </div>
        <div className="navlist">
          <ul id="list">
            <li><Link href="/pages/home">Home</Link></li>
            <li><Link href="/pages/about">About</Link></li>
            <li><Link href="/pages/contact">Contact</Link></li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Header