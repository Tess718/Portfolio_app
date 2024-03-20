import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-4 z-3">
            <div className="container">
              <a className="navbar-brand text-white fw-bold" href="#"><span className="logo"><i className="fa-solid fa-chevron-left"></i></span>DEVTESS <span className="logo">/<i className="fa-solid fa-chevron-right"></i></span></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-list text-white fs-3"></i>
              </button>
              <div className="collapse navbar-collapse p-3 p-md-0 rounded-3 rounded-md-0 border-3 border-white border-md-0" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link text-uppercase text-white" aria-current="page" href="#" id="nav">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-uppercase text-white" href="" id="nav">About</a>
                  </li>
                   <li className="nav-item">
                    <a className="nav-link text-uppercase text-white" href="" id="nav">skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-uppercase text-white" href="" id="nav">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-uppercase text-white" href="" id="nav">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-uppercase text-white" href="" id="nav">Contact</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar
