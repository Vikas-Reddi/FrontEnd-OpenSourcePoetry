import React , {useContext} from 'react' ; 
import { Redirect } from 'react-router-dom';
import  creteContext from '../context/creteContext'
const Logout = () =>{
  const {IS , setIS} = useContext(creteContext);
  
  const OnSubmit = e =>{
      setIS('');
      localStorage.clear();
  }
 if(IS == ''){
     return <Redirect to='/' />
 }else{
  return(
      <form onSubmit={OnSubmit}>
          <input type='submit' value='Logout' onSubmit={OnSubmit} className='Logout'></input>
      </form>
  )}
}

export default Logout