import React,{useContext} from 'react'
import { Global } from '../App'
export default function Home() {
    let {Count} = useContext(Global)
  return (
    <div>
        <center>
            <h1>Home</h1>
            <h2>Count: {Count}</h2>
        </center>
    </div>
  )
}
