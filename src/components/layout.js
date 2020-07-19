import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const ListLink = props => (
  <li className="site-nav-item">
    <Link
        className="site-nav-link"
        activeClassName="active-nav-link"
        to={props.to} 
        >
      {props.children}
    </Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <header className="site-header">
        <div className="site-title">
          <Link to="/" className="site-title-link">
            <h1>Progress Tracker</h1>
          </Link>
        </div>
        <nav className="site-nav">
          <ul className="site-nav-list">
            <ListLink to="/" 
                id="nav-about-link">
              Home
            </ListLink>
            <ListLink to="/about" 
                id="nav-about-link">
              About
            </ListLink>
          </ul>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <h3>Footer</h3>
      </footer>
    </React.Fragment>
  )
}
