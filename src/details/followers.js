import React, { useEffect, useState  } from "react";
import { useContext } from "react";
import axios from "axios";
import  creteContext from '../context/creteContext'
const Followrs = () =>{
    const [follow,SetF] = useState([]);
    const {IS} = useContext(creteContext)
    
    useEffect(()=>{
        axios.get(`http://localhost:4000/follow/${IS._id}`)
        .then(res => SetF(res.data))
        .catch(err => console.error(err))
    },[]);

 
    if(follow!= ''){
    return(<div>
        {follow.map((foll)=> 
        <div>
          <h1>@{foll.name}</h1>
          <button onSubmit={e => axios.delete(`http://localhost:4000/follow/${IS._id}/${foll._id}`) }>Unfollow</button>
          </div> )}
    </div>)
}else{
    return <div></div>
} }
export default Followrs ;