import React from 'react';
import axios from 'axios'
const Signup = async (sign) => {
    const  config = {
        headers:{
            'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': 'post'
        }
    }
 const Sign = await axios.post('http://localhost:4000/Login/signup' , sign , config);
 const Sign2 = Sign.data;
 console.log(Sign2)
 return Sign2;
  
}

export default Signup ;