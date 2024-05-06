import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom"


export default function NavBar() {

  return (
    <nav>
        <h2>Logo</h2>
        <ul>
            <li> <Link to = "/" >Home</Link> </li>
            <li> <Link to = "/Controller" >Controller</Link> </li>
        </ul>
        
    </nav>
  )
}

