import React,{useEffect,useState} from 'react'
import Card1 from './Card1'
export default function App() {
  useEffect(()=>{
    console.log("Hello By App")
  })
  let [Count1,setCount1] = useState(0)
  let [Count2,setCount2] = useState(0)
  return (
    <div className='border p-5 border-2 border-danger w-50 m-auto' >
      <center>
        <button onClick={()=>setCount1(Count1+1)}>Add1</button>
        <button onClick={()=>setCount2(Count2+1)}>Add2</button>

        <h1>Hello By App ,Count1:- {Count1}</h1>
        <Card1 Count2 = {Count2} />
      </center>
    </div>
  )
}
