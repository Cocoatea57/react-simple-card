import React from 'react'

function Image({url = '/image.jpg'}) {
  return (
    <div style={{border:'solid orange',margin:'2px'}}>
    <img src={url} alt="local image" width='100px' height='139'/>
    </div>
  )
}

export default Image