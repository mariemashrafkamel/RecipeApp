import React from 'react'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'

function Cuisine() {

  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  const getCuisine = async (name) =>{
    const data = await  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
    const recipes = await data.json()
    setCuisine(recipes.results)
  }

  useEffect( () => {
    getCuisine(params.type)
    console.log(params)
  },[params.type])

  return (
    <div className="gridd">
      {
        cuisine.map((item) =>{
          return (
            <div className="CCard" key={item.id}>
              <img src={item.image}/>
              <h4>{item.title}</h4>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default Cuisine
