

import axios from 'axios';
const Login = async (login) => {
    const  config = {
        headers:{
            'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': 'post'
        }
    }
  
  const Log = await axios.post ('http://localhost:4000/Login',login,config)//.then(res => res.json());
  const Log2 = Log.data
  const log3 = localStorage.setItem('Login', JSON.stringify(Log2))
  
  

  
  return Log2;
  //console.log(Log)
 // Logint(Log2);
  
};

export default Login ;