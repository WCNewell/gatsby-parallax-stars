import React from "react"
import Icon from "./assets/astronautClark.inline.svg"
import "./layout.sass"

const Layout = () => {

  return (
    <>
      <div className='stars'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      <div className="title">
        <div className="titlechild">
          <h1>Hello Galaxy!</h1>
          <Icon className="logo"/>
          <p>Stars Theme with Sass Parallax.</p>
          <p>Now go build something great!</p>
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
