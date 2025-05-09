import React, { Component } from 'react'
import Title from './Title'
import Description from './Description'
import Image from './Image' 

class SimpleCard extends Component{
  render(){
    return(
    <div style={{display: 'flex', border:'solid blue', padding:'8px'}}>
        <div>
          <Image/>  
        </div>
        
        <div>
          <Title/>
          <Description/>  
        </div>
    </div>
 ) }
    
}

export default SimpleCard