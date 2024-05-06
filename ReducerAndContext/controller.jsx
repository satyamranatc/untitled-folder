import React,{useState,useContext} from 'react'
import { Global } from '../App'
export default function Controller() {
let  [InptValue,setInptValue] = useState(1)
    let {dispatch} = useContext(Global)
  return (
    <div>
        <center>
            <h1>Controller</h1>
            <br />
            <input  onChange={(e)=>setInptValue(e.target.value)} style={{padding:"1rem", width:"100%"}} type="text" placeholder='Enter The Value To Change...' />
            <br />
            <br />
            <button onClick={()=>dispatch({type:"Add",value:InptValue})}>Add</button>
            <button onClick={()=>dispatch({type:"Sub",value:InptValue})}>Sub</button>
            <button onClick={()=>dispatch({type:"Mult",value:InptValue})}>Mult</button>
            <button onClick={()=>dispatch({type:"Sqr",value:InptValue})}>Sqr</button>
        </center>
    </div>
  )
}
