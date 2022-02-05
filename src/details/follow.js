import React ,{useContext, useState}from "react";

import creteContext from '../context/creteContext';
import axios from "axios";


const Follow = (id ,idU) =>{
   
    const{IS}= useContext(creteContext)
const [follow,followSet]=useState({
    idU: idU,
    idFollow: JSON.stringify(id)
})
const [a ,seta] = useState(true)
const  config = {
    headers:{
        'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': 'post'
    }
}
const onFollow = e =>{
    e.preventDefault();
    console.log(id);
    axios.post('http://localhost:4000/follow/req',follow ,config)
    seta(false)
    
}
if(IS!= ''){
if(a){
return(<div>
    <form onSubmit={onFollow} >
        <input type='submit' value='follow' className="cl" />
    </form>
</div>)
}else{
    return <h5>Following</h5>
}}else{
  return <div></div>
}
}

export default Follow;