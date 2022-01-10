
import React, { useRef } from 'react'
import IdleTimer from 'react-idle-timer'


const onIdle1=()=>{
  console.log('koko');
}

const Component = () => {
  const ref1=useRef(null)
  return (
    <div>
           <IdleTimer  ref={ref1} timeout={2000}  onIdle={onIdle1} ></IdleTimer>
      
    </div>
  )
}

export default Component
