import React ,{useState,useEffect} from 'react';
import axios from 'axios';
const CommentsData = async (Id ,Name) =>{
   
    const  config = {
        headers:{
            'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': 'post'
        }
    }
    const [Co ,CoSet] = useState([])

    const [CoP ,CopSet]= useState({
        id2: Id.toString(24),
        comment: '',
        name: Name
    })
    useEffect(async ()=>{
    await  axios.get(`http://localhost:4000/tasks/insight/G/${Id}`)
    .then(res => res.json())
    .then(data =>CoSet(data))
    .catch((err) => {
        console.log(err);
      })
    
    },[])
  
    const OnDelet = async e =>{
        e.preventDefault();
        
            await axios.delete(`http://localhost:4000/tasks/insight/D/${Id}`)
            
    }
    const Onsubmit = async e =>{
        e.preventDefault();
        await axios.post(`http://localhost:4000/tasks/insight/P/${Id}`, CoP , config)
        

    }
    const DeleteCom = ()=>{
        if(id2 == Id.toString(24)){
            return <button onSubmit={OnDelet}>delete</button>
        }else{
            return <div>!</div>
        }
    }
    
    const OnChange= e =>{
        CopSet({...CoP,[e.target.name]:e.target.value})
    }
    return(
        <div>
            <form onSubmit={Onsubmit}>
            <input type='text'  name='comment' value={CoP.comment} onChange={OnChange}></input>
            <input type='submit' value='Submit'/>
            </form>
            {Co.map((co)=> <div key={Co._id}>
                <h4>{co.name}</h4>
                <h2>{co.comment}</h2>
                <DeleteCom />
            </div>)}
        </div>
    )
}
export default CommentsData;