import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import creteContext  from './context/creteContext'


import './App.css'


const Navbar = () => {
    const {IS } = useContext(creteContext);
    //const [IS] = useContext(creteContext)
    if(IS==''||IS== null){
    return (
       
        <nav className="Navbar">
            
           OpenSourcePoeatry (#ALPHA)
           <Link to='/login'> Login</Link>
            
           
        </nav>
       
    )}else{
        return(
            <nav className="Navbar">
                OpenSourcePoeatry (#ALPHA)
                <Link to='/You' className='Link4'> YOU</Link>
                <Link to='/Add' className='Link4'>AddPoems</Link>
            </nav>
        )
    }
}

export default Navbar
