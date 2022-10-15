import React from 'react'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Button,Card } from 'react-bootstrap';
import {Routes, Route,Link,BrowserRouter, useParams,useRouteMatch} from 'react-router-dom'
import Item from './Item'

function Veggie() {
 // const {id} = useParams()
  //const {path} = useRouteMatch()
  const [veggie, setVeggie] = useState([]);
 
  useEffect(() => {
    getVeggie()
    
   
  }, []);

  const getVeggie = async () => {
     
     const check = localStorage.getItem('veggie')

      if(check){
      setVeggie(JSON.parse(check))

     }
     else{  
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20&tags=vegetarian`)
       const data = await api.json()

       localStorage.setItem('veggie',JSON.stringify(data.recipes))

       setVeggie(data.recipes)
   }

    
     //console.log('dataa',data)
    }

  return (
    <div>
   
    <div className="wrapper" >
      <h3>Vegeterian Picks</h3>
      <Splide options={{
        perPage:3,
        arrows:false,
        pagination:false,
        drag:'free',
        gap:'5rem',
      }}>
      {
        veggie.map((recipe) =>{
          return (
            <SplideSlide key={recipe.id}>
              <Card className="cardRecipe" key={recipe.id}>
{/*               <Link to={`veggie/${recipe.id}`} state={{ title: recipe.title }}>
 */}                <Link to={`veggie/${recipe.id}`} 
                          state= {{title: recipe.title, url:recipe.image }} >
{/*               <Link to={{pathname:`veggie/${recipe.id}`, state:{ title: recipe.title }}}>
 */}

                <p> {recipe.title} </p>
                
                <img src={recipe.image} />

                </Link>
               
              </Card>
            </SplideSlide>
          )

        })
      }
      </Splide>
    </div>
</div>
  )
}

export default Veggie
