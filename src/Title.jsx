import React from 'react'

function Title({text='Mr. Frank'}) {
  return (
    <div style={{border:'solid orange',margin:'2px' }}><h5>{text}</h5></div>
  )
}

export default Title