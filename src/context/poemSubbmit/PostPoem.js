import React , { useState , useContext } from "react";
import { Redirect } from "react-router-dom";
import  creteContext from '../creteContext';
import axios from "axios";

const PostPoem = ()=>{
    const {IS} = useContext(creteContext);
    const [ret , Setr] = useState(true);
    const  [Post , Set] = useState({
    name:IS.name,
    title:' ',
    Poem:'',
    insight: '',
    id2: IS._id
   })
   const config={
    headers:{
        'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': 'post'
    }
}
   const OnSubmit =async e =>{
       e.preventDefault();
       await axios.post('http://localhost:4000/tasks/Poem' , Post , config)
        Setr(false);
   }
   const OnChange = e => {
       Set({...Post , [e.target.name]:e.target.value })
   }
if(IS!=''){
  if(ret==true){return( <div className="backrem">
    <form onSubmit={OnSubmit} className='Sblock'>
     
      <h3>Title</h3>
      <input type='title'  name='title' value={Post.title} onChange={OnChange} className='form2'></input>
     
      <h3>Poem , paste it HERE</h3>    
      <textarea type="text" name='Poem' rows='10' column='10'   value={Post.Poem} onChange={OnChange} className='longStuff2'/>
      <h3>insight // just some context needed before reading it</h3>
      <textarea type="text" name = 'insight' rows='10' column='10' value={Post.insight} onChange={OnChange} className='longStuff'/>
      <h1></h1>
      <input type='submit' value='Submit' className='btn3'/>
      
    </form>
    </div>
      )}else{
          return (<Redirect to='/'/>)
      }}else{
       return (<Redirect to='/login'/>)
      }
}

export default PostPoem