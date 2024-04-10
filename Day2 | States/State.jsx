import React,{useState} from 'react'
import Card from './Card'
export default function App() {
  let [Name,SetName] = useState("Press Buttons To Add a Name")
  return (
    <div>

      <center>
        <h2>Welcome To The App</h2>
        <h3>Hii {Name}</h3>
        <button onClick={()=>{SetName("Ajay")}} >A</button> {/* Ajay */}
        <button onClick={()=>{SetName("Vijay")}}>B</button> {/* Vijay */}
        <button onClick={()=>{SetName("Nitin")}}>C</button> {/* Nitin */}
      </center>

    </div>
  )
}
