import React from 'react'
import "./Footer.css"

const Footer = () => {
    const year = new     Date().getFullYear();
  return (
    <footer>
      <p>Copyrights &copy; {year}</p>
      <p>|</p>
      <p>Contact us : paulraj2218@gmail.com</p>
    </footer>
  )
}

export default Footer
