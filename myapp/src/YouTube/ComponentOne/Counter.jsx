import React,{useRef, useState} from 'react'

const Counter = () => {
    const [number,setNumber ]= useState(0);
    let num = useRef(0)
    const handleClick=()=>{

            setNumber(number=> number+1)
            setNumber(number=> number+1)
            setNumber(number=> number+1)
            setNumber(number=> number+4)//Then 7 increase hou one click te

       //IK VR CLICK KRNA 
        // setNumber(number+1)//1 hi answer aayu
        // setNumber(number+1)
        // setNumber(number+1)
        num.current++;
        console.log( num.current)
    }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Counter
