import React from 'react'
import {useEffect, useState} from 'react'
function Popular() {

  const [popular, setPopular] = useState([]);
 
  useEffect(() => {
    getPopular()
    
   
  }, []);

  const getPopular = async () => {
     const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
     const data = await api.json()
     setPopular(data.recipes)
     console.log('dataa',data)
    }

  return (
    <div>
      {popular.map((recipes) =>{
        return (
         <div key={recipes.id}>
          <h4> {recipes.title}</h4>
         </div>


        )
      })}
    </div>
  )
}

export default Popular
