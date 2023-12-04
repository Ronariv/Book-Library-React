// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1><Link to={"/"}>Library</Link></h1>
      </div>
      <ul className="nav-item">
        <li><Link to={"/favorite"}>Favorite</Link></li>
      </ul>
    </nav>
  )

}

export default Navbar