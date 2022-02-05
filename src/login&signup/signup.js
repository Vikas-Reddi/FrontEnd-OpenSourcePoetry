import React,{useContext,useState} from 'react';
import Signup from '../context/Signup';
import creteContext from '../context/creteContext';
import { Redirect } from 'react-router-dom';
 const SignupForm = () => {
  const {IS,setIS,Sstatus } = useContext(creteContext);
  const [Signupval,set3]= useState({
    name : "",
    email: "",
    password: "",
    Avatar:"",
    Nish: "",
  SomeDetails:"",
  liks:""
  })
  
  const OnSubmit= async e => {
    e.preventDefault();
    const si = await Signup(Signupval);
    setIS(si);
    Sstatus(true);
  } 
  const OnChange = e =>{
    set3({...Signupval,[e.target.name]: e.target.value})
  }
  if(IS==''||IS== null){
  return(
    <div className='backrem'>
      <h2>Create your account</h2>
    <form onSubmit={OnSubmit} className='Sblock'>
      <h3>name // try something fancy</h3>
      <input type="name" name="name" value={Signupval.name} onChange={OnChange} className='form2'/>
      <h3>email //@</h3>
      <input type="email" name="email" value={Signupval.email} onChange={OnChange} className='form2'/>
      <h3>password //? ) </h3>
      <input type="password" name="password" value={Signupval.password} onChange={OnChange} className='form2'/>
      <h3>Ur poem cohice // ur fav type</h3>
      <input type="Nish" name="Nish" value={Signupval.Nish} onChange={OnChange} className='form2'/>
      <h3>What do u want people to know // just for socializing</h3>
      <textarea type="text" name='SomeDetails' rows='10' column='10'   value={Signupval.SomeDetails} onChange={OnChange} className='longStuff'/>
      <h3>Write your Avatar //write on your avatar </h3>
      <textarea type="text" name='Avatar' rows='10' column='10'   value={Signupval.Avatar} onChange={OnChange} className='longStuff'/>
     <h3>Link to connect with people // where ever u could connect with u :)</h3>
     <input type="links" name="links" value={Signupval.liks} onChange={OnChange} className='form2'/>
     <h3></h3>
      <input type="submit" value="SignUP" className='btn3'/>
    </form>
    
    </div>
  )}
  else{
    return(<Redirect to='/' />)
  }
};
export default SignupForm;
