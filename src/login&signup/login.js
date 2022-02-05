import React , {useState,useContext ,useEffect}from 'react';
//import {Link} from 'react-router-dom';
import login from '../context/Login';
import { Link , Redirect } from 'react-router-dom';
import  creteContext from '../context/creteContext';


 function Login() {
  const {IS,setIS  , Sstatus} = useContext(creteContext)
  const [logD, set] = useState ({
    email : "" ,
    password: ""
   });
   
   const OnSubmit =  async e =>{
    e.preventDefault();
     const  x= await login(logD)
     
     await setIS(x);
     Sstatus(true);} 
   useEffect(()=>{
     const logD = localStorage.getItem('Login')
     setIS(JSON.parse(logD))
      
   },[])
  
    
  
  //console.log('yo')
  //console.log(IS);
     
  
  const OnChange =e =>{
     set({...logD,[e.target.name]: e.target.value})
   }
   if(IS== null || IS == ''){
  return (
    <div  id='rightBlock'>
      
    <form onSubmit={OnSubmit} id='leftBlock'>
    <h1 className='text'>LOGIN</h1>
      <h4>Email</h4>
      <input type='email' name='email' value={logD.email} onChange={OnChange} className='Form3'></input>
      <h4 >Password</h4>
      <input type='password'  name='password' value={logD.password} onChange={OnChange} className='Form2'></input>
      <h1></h1>
      <input type='submit' value='Submit' className='But'/>
      <h1></h1>
      <Link to='/Signup' className='Link1'>Signup HERE!!!</Link>
    </form>
    <h1>

    </h1>
    
    
    </div>
    
    
  )}
  else{
    return(
      <Redirect to='/'/>
    )
  };
};
export default Login;