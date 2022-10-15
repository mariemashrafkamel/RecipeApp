import React from 'react'
import {Routes, Route,Link,BrowserRouter, useParams,useRouteMatch} from 'react-router-dom'
import { useState, useEffect } from 'react'

function searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()

    const getSearched = async (name) =>{
        const data = await  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
       
        const recipes = await data.json()
        console.log('search',recipes)
        setSearchedRecipes(recipes.results)
      }

      useEffect(() => {
        getSearched(params.search)
      },[params.search])
    
  return (
    <div className="gridd">
      {
        searchedRecipes.map((item) =>{
          return (
            <div className="CCard" key={item.id}>
                <Link to={`/page/recipe/${item.id}`} 
                      state= {{title: item.title, url:item.image }}
                      >
                <img src={item.image}/>
                <h4>{item.title}</h4>
            </Link>
             
            </div>
          )
        })
      }
      
    </div>
  )
}

export default searched
