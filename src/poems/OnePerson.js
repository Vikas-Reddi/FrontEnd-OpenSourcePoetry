import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Follow from '../details/follow';
const OnePerson =  () =>{
    const {id} = useParams();
    const [Pe , peSet] = useState({})
    
    useEffect(()=> { axios.get(`http://localhost:4000/Login/Person/${id}`).then(res => peSet(res.data))})
   
    return(
      <div className='backrem'>
        <div className='you'>
        <h1 className='Persona'>THe PeRsona</h1>
         <h2 className='Avatar'>{Pe.Avatar}</h2>
         <h1></h1>
         <h1 className='form5'> {Pe.name} .name</h1>
         <h1 className='form5'>  {Pe.Nish}   .likes</h1>
          <p className='limit'>info:  {Pe.SomeDetails}</p>
          <Follow id={id}/>
        </div>
        </div>
        )
}

export default OnePerson