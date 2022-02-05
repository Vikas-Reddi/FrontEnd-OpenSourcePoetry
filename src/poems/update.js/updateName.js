import React ,{useState ,useContext} from 'react';
import  creteContext from '../../context/creteContext'
import axios from 'axios';
const UpdateName =()=>{
    const  config = {
        headers:{
            'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': 'post'
        }
    }
    const {IS,setIS} = useContext(creteContext)
    const {_id ,name,email,password,Avatar,Nish ,SomeDetails,liks} = IS;
    const [update ,setUpdate] = useState([{
        _id: _id,
        name : name,
        email: email,
        password: password,
        Avatar: Avatar,
        Nish: Nish,
      SomeDetails:SomeDetails,
      liks:liks
      }])
    const OnSubmit = e =>{
        e.preventDefault();
         axios.post(`http://localhost:4000/Login/URSP/${IS._id}` , update , config);
        setIS(update)
    }
      const onSub = e =>{
       e.preventDefault();
        setU(false)
    }
    const OnChange = e =>
    {setUpdate(e.target.value)}
    
    const [up , setU]=useState(true) 
if(up){
return(<div>
    <h1 className='form3'> {update.name} .name</h1>
    <form onSubmit={onSub}>
        <input type='submit' value='Alter'></input>
    </form>
</div>)
}else{
    return(<div>
        <form onSubmit={OnSubmit}>
        <h3>name</h3>
        <input type="name" name="name" value={update.name} onChange={OnChange} className='form2'/>
      
      
      <h3>Ur poem cohice // ur fav type</h3>
      <input type="Nish" name="Nish" value={update.Nish} onChange={OnChange} className='form2'/>
      <h3>What do u want people to know // just for socializing</h3>
      <textarea type="text" name='SomeDetails' rows='10' column='10'   value={update.SomeDetails} onChange={OnChange} className='longStuff'/>
      <h3>Write your Avatar //write on your avatar </h3>
      <textarea type="text" name='Avatar' rows='10' column='10'   value={update.Avatar} onChange={OnChange} className='longStuff'/>
     <h3>Link to connect with people // where ever u could connect with u :)</h3>
     <input type="links" name="links" value={update.liks} onChange={OnChange} className='form2'/>
     <h3></h3>
      <input type="submit" value="Submit" className='btn3'/>
            <input type='submit' value='Update'></input>
        </form>
    </div>)
}}

export default UpdateName;