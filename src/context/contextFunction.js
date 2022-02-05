import React ,{useState}from 'react';
import  creteContext  from './creteContext';

import Switch2  from '../Switch2'

export default function ContextFunction (){
 
    const [Status,Sstatus] = useState(false)
    
    const [IS , setIS] = useState('');
    
    return(<creteContext.Provider value = {{IS, setIS , Status ,Sstatus }}>
        {(<Switch2/>)}
    </creteContext.Provider>)

}