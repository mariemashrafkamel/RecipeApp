import React from 'react'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Button,Card } from 'react-bootstrap';
import {Routes, Route,Link,BrowserRouter, useParams,useRouteMatch,useLocation,useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

function Item({props}) {
    const {id} = useParams()
   // const { title } = location.state
    const location = useLocation()
   //console.log(location)
    const title = location.state?.title
    const navigate = useNavigate()
  //const {path} = useRouteMatch()
  return (
    <div>
        <React.StrictMode>
          <div>
          <h4>{title}</h4> 
          <img src={location.state.url} />
          <button onClick={()=> navigate('/page')}>All Foods</button>

         {/*  <Routes>
              <Route path="/o" element={ <NavBar/> }>
                Header
              </Route>
          </Routes> */}

          </div>
        </React.StrictMode>
   
    </div>
  )
}

export default Item
