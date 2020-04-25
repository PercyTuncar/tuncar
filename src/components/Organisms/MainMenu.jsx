import React from "react"
import { NavLink } from "react-router-dom"

const MainMenu = () => (
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
          
        </div>
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
          <nav className="main-menu" id="main-menu">
            <ul>
            <li><NavLink to="/" activeClassName="activo"> Home </NavLink></li>
            <li><NavLink to="/services" activeClassName="activo"> Services </NavLink></li>
            <li><NavLink to="/projects" activeClassName="activo"> Projects </NavLink></li>
                <li><NavLink to="/blog" activeClassName="activo"> Blog </NavLink></li>
                <li><NavLink to="/formulario" activeClassName="activo"> Podcast </NavLink></li>
                <li><NavLink to="/cursos" activeClassName="activo"> Cursos </NavLink></li>
            </ul>
          </nav>
          <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>
    </header>
)

export default MainMenu