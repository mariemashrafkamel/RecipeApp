import styled from 'styled-components'
import {useEffect, useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const SearchBox = () => {

    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
      e.preventDefault()
      navigate('/searched/'+input)
      

    }
    return ( 
       <div style={{position:'relative', width:'100%'}}> 
            <form className="formStyle" onSubmit={submitHandler}>
                  <FaSearch></FaSearch>
             <input type="text" value={input} onChange={ (e)=>setInput(e.target.value)}/>
                  </form>
       </div>
     );
}
 
export default SearchBox;