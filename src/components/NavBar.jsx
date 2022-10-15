import React from 'react'
import {Routes, Route,Link,BrowserRouter, useParams,useRouteMatch} from 'react-router-dom'


function NavBar() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="nav-item"> Home</Link>
        <Link to="/page"  className="nav-item"> Pages</Link>
      </nav>
    </div>
  )
}

export default NavBar
