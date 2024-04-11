import React,{useState} from 'react'

export default function App() 
{

  let [Data,setData] = useState([10,10,10]);

  function handleClick()
  {
    setData([...Data,20])
   
  }

  return (
    <div>

      <center>
        <h1>Hello</h1>
        <hr />
        <button onClick={()=>{handleClick()}}>ADD</button>

        {
          Data.map((item) =>(
              <div>
                {item}
              </div>
            
          ))
        }

      </center>


    </div>
  )
}
