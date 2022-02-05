import React, { useContext } from 'react';

import '../App.css'
import  creteContext from '../context/creteContext'
import Followrs from '../details/followers';
import Logout from '../poems/logOut';


const You =  () =>{
    
    const {IS } = useContext(creteContext)
   
   
    return(
      <div className='backrem'>
        <div className='you'>
          <h2 className='Avatar'>{IS.Avatar}</h2>
          <h1></h1>
         <h1 className='form4'> {IS.name} .Name </h1>
         
         <h1 className='form4'>{IS.Nish}.#likes</h1>
          <p className='Limit'>#SomeInfo// {IS.SomeDetails}</p>
          <Followrs />
          <Logout/>
          <h6>////Update function will be added soon</h6>
        </div>
        </div>
        )
}
//
export default You