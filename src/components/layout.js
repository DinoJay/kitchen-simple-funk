import React from "react"
import { Link } from "gatsby"

import '../globalStyles.css';

import bio from './bio';

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          className="flex items-center"
          style={{
            ...scale(2.2),
            marginBottom: rhythm(1),
            marginTop: 0,
          }}
        >
          <Link
            className="font-bold"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <span className="" style={{color: 'hsla(0,0%,0%,0.85)'}}>Kitchen /</span>  <br></br><span style={{color: 'tomato'}}>Funk
              <img className="m-1 pt-2" src="icons/pizza-slice.svg" style={{width: '1em', height: '1em', marginBottom: 0}}></img>
              <img className="m-1 pt-2" src="icons/antenna.svg" style={{width: '1em', height: '1em', marginBottom: 0}}></img>
            </span>
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            // fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
          Kitchen / <span style={{color: 'tomato'}}>Funk</span>
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
<div>Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </footer>
      </div>
    )
  }
}

export default Layout
