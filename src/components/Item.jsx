import React from 'react'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Button,Card } from 'react-bootstrap';
import {Routes, Route,Link,BrowserRouter, useParams,useRouteMatch,useLocation,useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import Styled from 'styled-components'

function Item({props}) {
    const {id} = useParams()
   // const { title } = location.state
    const location = useLocation()
   //console.log(location)
    const title = location.state?.title
    const navigate = useNavigate()
    
    const [details , setDetails] = useState({})
    const [activeTab, setActiveTab] = useState('instructions')

    const fetchDetails = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
      const detailData = await data.json()
      setDetails(detailData)
      console.log(detailData.extendedIngredients)

    }

    useEffect(() =>{
      fetchDetails()
    },[id])
   
  //const {path} = useRouteMatch()
  return (
    <div>
        <React.StrictMode>
          
          <div className="item">
          <h5>{details.title}</h5>
          <img src={details.image}/>
{/*           <button onClick={()=> navigate('/page')} className="item-button">All Foods</button>
 */}      <button onClick={()=> setActiveTab('instructions')} className={activeTab== 'instructions'?'active':''}>Instructions</button>
          <button onClick={()=> setActiveTab('ingredients')}  className={activeTab== 'ingredients'?'active':''}>Ingredients</button>
           {activeTab== 'instructions' && (
            <div >
            <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
           </div>
           )}

           {activeTab == 'ingredients' && (
              <ul>
              {details.extendedIngredients.map((ingredient)=>(
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
           </ul> 
           )}
           

         {/*   <ul>
              {details.extendedIngredients.map((ingredient)=>(
                <li key={ingredient.id}>{ingredient.id}</li>
              ))}
           </ul> */}
         {/*  <h4>{title}</h4> 
          <img src={location.state.url} /> */}
          </div>
        
        </React.StrictMode>
   
    </div>
  )
}

export default Item
