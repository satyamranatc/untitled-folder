import React,{useEffect,memo} from 'react'
import Card2 from './Card2'
export default memo(function Card1({Count2}) {
    useEffect(()=>{
        console.log("Hello By Card1")
      })
  return (
    <div className='border border-2 p-4 border-danger m-auto' >
        <center>
            
            <h2>Card 1 , Count2:- {Count2}</h2>
            <Card2 Count2 = {Count2} />
        </center>
    </div>
  )
})
