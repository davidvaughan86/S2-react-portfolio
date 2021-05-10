import React from 'react'
import {useState} from 'react'

export default function App (props){
    const [theTrueCount, setCount] = useState(0)

  const [anything] = useState("count")
  
  return (
    <div>
      <h1>Likes</h1>
      <div>{theTrueCount}</div>
      <button onClick={() => { setCount(theTrueCount + 1)}}> Drop me a like </button>
      
      
    </div>
  )
}

