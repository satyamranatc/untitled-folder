// App:
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./Home";
import Card from "./Card";
import "./App.css"

export default function App() 
{

  let Users = [
    {Name:"John",Age:"30"},
    {Name:"Jane",Age:"20"},
    {Name:"Mary",Age:"10"},
    {Name:"Peter",Age:"40"},
    {Name:"Lisa",Age:"50"},
    {Name:"Sarah",Age:"60"},
  ]


  return (
    <>
      <h1>Hello</h1>
      <Home />

      <hr />


      <div id="Cards">

          {Users.map((e)=>(
            <Card name={e.Name} age={e.Age} />
          ))}

      </div>
    </>
  );
}



// Card:
/* eslint-disable no-unused-vars */
import React from 'react'
import "./Card.css"
export default function Card(props) 
{
  let {name,age = 0} = props
  return (
    <div id = "Card">
        <h3>Card:{name} - Age: {age}</h3>
    </div>
  )
}



// Home:
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Home() {
  return (
    <div>
        <center>
            <h3>Home</h3>
        </center>
    </div>
  )
}
