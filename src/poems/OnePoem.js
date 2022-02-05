import React ,{useState ,useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Redirect2 from './redirect';

import creteContext from '../context/creteContext';
const OnePoem =  () =>{
    const {IS } = useContext(creteContext);
    const [Uri , set] = useState({});
    const {id} = useParams();
    
    useEffect( ()=>  {  axios.get(`http://localhost:4000/tasks/O/${id}`).then(res => set(res.data))})
    
    
    const [Co ,CoSet] = useState([])

    
    useEffect( ()=>{
    axios.get(`http://localhost:4000/tasks/insight/G/${id}`)
    .then(res => CoSet(res.data))
    
    
    
    } ,[])
  const DleteC = ()=>{
      if(Co.name != IS.name){
        return <button onSubmit={OnDelet}>Dellet</button>
      }else{
        return <div></div>
      }
  }
    const OnDelet= async e =>{
        
        await axios.delete(`http://localhost:4000/tasks/insight/D/${Co._id}`)
    }
    
    
    
    return(
        <div className='Blog'>
            <h1 className='Title'>{Uri.title}</h1>
            <pre><p>{Uri.Poem}</p></pre>
            <h1>--{Uri.name}</h1>
            
            <h1>----------------------------</h1>
            <pre><p>{Uri.insight}</p></pre>
            <h1>----------------------------</h1>
            <Redirect2 id={id}/>
            
            {Co.map((co)=> <div key={co._id} className='commets'>
                <h4 className='comtit'>@{co.name}</h4>
                <h4>{co.comment}</h4>
                <DleteC />
            </div>)}
        </div>

        
    )
    

}

export default OnePoem