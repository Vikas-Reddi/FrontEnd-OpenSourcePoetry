import React,{useContext ,useState} from 'react';
import { Redirect } from 'react-router-dom';
import creteContext from '../context/creteContext';
import axios from 'axios';

const Redirect2 = (id) =>{
    const {IS} = useContext(creteContext)
    const [CoP ,CopSet]= useState({
        id2: id.toString(24) ,
        comment: '',
        name: IS.name
    })
    const  config = {
        headers:{
            'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': 'post'
        }}
    const Onsubmit = async e =>{
        e.preventDefault();
        await axios.post(`http://localhost:4000/tasks/insight/P/${id}`, CoP , config)
        

    }
    const OnChange= e =>{
        CopSet({...CoP,[e.target.name]:e.target.value})
    
     }
     if(IS!= ''){
    return(
        <form onSubmit={Onsubmit} >
            
            <input type='text'  name='comment' value={CoP.comment} onChange={OnChange} className='postcom'>
            </input>
            <input type='submit' value='' className='combtn'/>
            </form>
    )}
    else{
        return(
            <Redirect to ='/login'></Redirect>
        )
    }
}
 
export default Redirect2 ;