import React from 'react';
import SignupForm from './login&signup/signup'
import Login from './login&signup/login'

import OnePoem from './poems/OnePoem'
//import {Route ,BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route ,BrowserRouter as Router ,Switch} from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './home/Home'
import About from './abt/About';
import PostPoem from './context/poemSubbmit/PostPoem';
import OnePerson from './poems/OnePerson'
import You from './poems/you'
import UpdateName from './poems/update.js/updateName';

const Switch2 = () => {
  return (
    <div className='img'>
    <Navbar/>
    <Switch>
           
    <Route exact path ="/" component={Home}/>
    <Route exact path = "/Abt" component={About}/>
    <Route exact path = "/Signup" component ={SignupForm}/>
    <Route exact path = "/login" component={Login}/>
    <Route  path = '/poems/:id' component={OnePoem}/>
    <Route path = '/People/:id' component={OnePerson}/>
    <Route path = '/Add' component={PostPoem}/>
    <Route path = '/You' component={You}/>
    <Route path = '/:id' component={UpdateName} />
  </Switch>
  
  </div>
  );
};
export default Switch2;
