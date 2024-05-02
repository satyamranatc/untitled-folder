import React,{useEffect} from 'react'

function Card2({Count2}) {
    useEffect(()=>{
        console.log("Hello By Card2")
      })
  return (
    <div className='border border-2 p-4 border-danger m-auto'>
        <center>
        {console.log("Hi By CARD2 JSX")}
            <h3>Card 2, Count2: {Count2}</h3>
        </center>
    </div>
  )
}


export default Card2;