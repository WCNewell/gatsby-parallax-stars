import React from "react"
import { Link } from "gatsby"
import ClarkIcon from "./assets/astronautClark.inline.svg"
// import "./layout.css"
import "./layout.sass"

const Layout = () => {

  return (
    <>
      <div className='stars'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      <div className="title">
        <div className="titlechild">
          <h1>Hello Galaxy.</h1>
          <ClarkIcon className="logoicon"/>
          <p>Stars Theme with Sass Parallax.</p>
          <p>Now go build something great!</p>
          <Link to="/page-2/">Go to page 2</Link>
          <footer>
            © {new Date().getFullYear()} Logo by Clark Newell, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
