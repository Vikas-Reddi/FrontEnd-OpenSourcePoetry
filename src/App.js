import React from 'react'
import Switch2  from './Switch2'
import SignupForm from './login&signup/signup'
import Login from './login&signup/login'
import ContextFunction from './context/contextFunction'
//import {Route ,BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route ,BrowserRouter as Router ,Switch} from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './home/Home'
import About from './abt/About';
//import Logint from './context/contextFunction'
//import { Switch } from 'react-router-dom';
const App = () => {
  return (
    
    <Router>
    
    
    <ContextFunction/>
    </Router>
      
      )
}

export default App



