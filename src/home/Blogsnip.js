import React, { Component ,useContext,useState } from 'react';
import { Link} from 'react-router-dom';

import axios from 'axios';
import '../App.css'
import  Follow from '../details/follow'

export default class Blocksnip extends Component {
   
  constructor(props){
      super(props);
      this.state={
          Poem : []
          
          
          }
      }
  
   
    //const PoemURL= 'http://localhost:4000/tasks/Main';
  componentDidMount(){
      axios.get('http://localhost:4000/tasks/Main')
      .then(res=> this.setState({Poem: res.data}))
      .catch(err=>console.log(err))

  }

    render() {
        
        

        
        const {Poem } = this.state;
       
        const  config = {
            headers:{
                'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': 'post'
            }}
       /* const FollowBtn = e =>{
            e.preventDefault();
            axios.post('http://localhost:4000/follow/req' , Follow ,config)
        }*/
    return <div >
        {Poem.reverse().map((poem)=><div key={poem._id}  className='Blog'>
            
            
            <h1 className='Title'>{poem.title}</h1>
            <pre><p>{poem.Poem}</p></pre>
            <h4>--N:{poem.name}</h4>
            <Link to={`/poems/${poem._id}`} style={{ textDecoration: 'none' }} className='btn5'>Comment</Link>
            <Link to={`/People/${poem.id2}`} className='btn6'>Person</Link>
            <Follow id={poem.id2}/>
            </div>)}
        </div>;
  }
}



