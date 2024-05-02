import React,{useReducer} from "react";
import "./App.css"
export default function App() {
  function Reducer(state,action)
  {
    switch(action.type)
    {
      case "add":
        return state+1;
      case "sub":
        return state-1;
      default:
        return state;
    }

  }
  let [Count,dispatch] = useReducer(Reducer,5);
  return (


    <div>
      <center>
        <h1>Hello: {Count}</h1>
        <hr />
        <button onClick={()=>dispatch({type:"add"})} >Add</button>
        <button onClick={()=>dispatch({type:"sub"})} >Sub</button>
      </center>
    </div>

     
  );
}
