import React from 'react'
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks,GiHouse} from 'react-icons/gi'
import styled from 'styled-components'
import {Routes, Route,Link,BrowserRouter, useParams,useRouteMatch,NavLink} from 'react-router-dom'

function Category() {
  return (
    <div className="List">
      <NavLink className="SLink" to={'/cuisine/italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink className="SLink" to={'/cuisine/thai'}>
        <GiNoodles/>
        <h4>Thai</h4>
      </NavLink>
      <NavLink className="SLink" to={'/cuisine/american'}>
        <FaHamburger/>
        <h4>American</h4>
      </NavLink>
      <NavLink className="SLink" to={'/cuisine/japanese'}>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </NavLink>
      <NavLink className="SLink" to={'/'}>
        <GiHouse/>
        <h4>Home</h4>
      </NavLink>
    </div>
  )
}

export default Category
