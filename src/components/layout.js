import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
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
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div class="site-container">        
      <aside class="left-bar left-bar-toggle">
        <input type="checkbox" class="hamburger-menu-button" id="hamburger-menu-button">
        </input>
        <label class="hamburger-menu-label" htmlFor="hamburger-menu-button" id="hamburger-menu-label">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </label>
        <div class="left-bar-inner-container">
          <header className="site-header">
            <div className="site-title">
              <Link to="/" className="site-title-link">
                <h1>{data.site.siteMetadata.title}</h1>
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
        </div>
      </aside>
      <div className="main-content">
        {children}
      </div>
      <footer className="site-footer">

        <div className="external-link-container">
            <a className="social-link" href="https://andrewbraun.dev">
                My website
            </a>
            <a className="social-link" href="https://github.com/andrew-braun">
                GitHub
            </a>
            <a className="social-link" href="https://codepen.io/andrewbraun">
                CodePen
            </a>
        </div>
      </footer>
    </div>
  )
}