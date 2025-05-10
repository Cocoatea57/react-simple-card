import React from 'react'

function Description({text='Software Engineering Student at CodeTrain'}) {
  return (
    <div style={{border:'solid gray', padding:'8px', margin:'2px', height:'49%'}}>
        <p>
            {text}
        </p>
    </div>
  )
}

export default Description