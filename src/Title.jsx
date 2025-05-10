import React from 'react'

function Title({text='Mr. Frank'}) {
  return (
    <div style={{border:'solid orange',margin:'2px', height:'30%'}}><h5>{text}</h5></div>
  )
}

export default Title