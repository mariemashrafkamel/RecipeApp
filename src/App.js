//import logo from './logo.svg';
import React from 'react'
import Home from './pages/Home'
import Page from './pages/Page'
import NavBar from './components/NavBar'
import {Routes,Route,Link,Navigate} from 'react-router-dom'
import Item from './components/Item'
import {useEffect, useState} from 'react'
import Category from './components/Category'
import Thai from './pages/Thai'
import American from './pages/American'
import Italian from './pages/Italian'
import Japanese from './pages/Japanese'
import Cuisine from './pages/Cuisine'
import SearchBox from './components/searchBox'
import Searched from './pages/searched'
const App = () => {
  const [cartIsEmpty] = useState(true)
  return ( 
    <div className="App">
      <SearchBox/>
      <Category/>
{/*        <NavBar/>  
 */}     <Routes>
      <Route path="/" element={<Navigate to="/page"/>}>
        Home
      </Route>
     <Route path="/page" element={ <Page/> }>
     Page
      </Route>
     <Route path="/page/veggie/:id" element={ <Item/> }>
     Item
      </Route>
     <Route path="/page/recipe/:id" element={ <Item/> }>
     Item
      </Route>
     <Route path="/checkout" element={cartIsEmpty ? <Navigate to ="/page"/> : <p>Checkout</p> }>
     Cart
      </Route>
     <Route path="/thai" element={<Thai/> }>
     Cart
      </Route>
     <Route path="/japanese" element={<Japanese/> }>
     Cart
      </Route>
     <Route path="/italian" element={<Italian/> }>
     Cart
      </Route>
     <Route path="/american" element={<American/> }>
     Cart
      </Route>
     <Route path="/cuisine/:type" element={<Cuisine/> }>
     cuisine
      </Route>
     <Route path="/searched/:search" element={<Searched/> }>
     Searched
      </Route>
     </Routes>
       
       
    </div>
   );
}
 
export default App;

