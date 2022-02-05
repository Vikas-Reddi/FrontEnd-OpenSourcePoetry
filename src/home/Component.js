import React from 'react';

const Component1 = (poem)=>{
    return (
        
            <div key={poem._id} >
            <h2>N:{poem.name}</h2>
            <h1>{poem.title}</h1>
            <h2>{poem.Poem}</h2>
            
            </div>
        
    )
}
