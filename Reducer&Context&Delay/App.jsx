import React,{useEffect,useReducer,createContext,useState} from 'react'
import A from './A';

export let Global = createContext();

export default function App() {
  let [Count,dispatch] = useReducer(reducer,0);


  let [C,setC] = useState(0);

  
  useEffect(()=>{ //? The c Will Not update Instently Due To UseEffect
    function Add()
    {
      setC(5000);
      console.log(C)
    }
    Add()
  },[])



  function reducer(state,action) 
  {
    switch(action.type)
    {
      case "INC":
        return state+1;
      case "DEC":
        return state-1;
      
    }
  }


  
  return (
    <div>
      <center>
        {console.log("Hi By App HTML")}
        <h1>{Count}</h1>

        {C}
        <button onClick={()=>Add()} >Adddd</button>
        
        <hr />
        <Global.Provider value={dispatch}>
          <A />
        </Global.Provider>
      </center>
    </div>
  )
}
