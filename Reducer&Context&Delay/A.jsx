import React,{useEffect,useContext,memo} from 'react'
import { Global } from './App'
export default memo(function A() {
  useEffect(()=>{
    console.log("Hi By B")

  })

  let dispatch = useContext(Global);


  return (
    <div>
      <center>
        <h3>Hi By A</h3>
        <button onClick={()=>{dispatch({type:"INC"})}}>+</button>
        <button onClick={()=>{dispatch({type:"DEC"})}}>-</button>
      </center>
    </div>
  )
})
