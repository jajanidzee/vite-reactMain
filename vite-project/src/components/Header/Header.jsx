import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div className='HeaderMainDiv' >

      <h1 className="HeaderH1"><a href="https://www.nba.com/" className="HEaderA">Rose</a> </h1>
      <nav >
        <ul className='HeaderUl'>
          <li className='HeaderLi ' ><a href="https://www.nba.com/" className="HEaderA">About,</a></li>
          <li  className='HeaderLi'><a href="https://www.nba.com/" className="HEaderA">Experiences,</a></li>
          <li  className='HeaderLi'> <a href="https://www.nba.com/" className="HEaderA"> Email </a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header