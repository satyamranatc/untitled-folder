import React, { createContext, useReducer } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Controller from "./Components/Controller";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export let Global = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "Add":
      return (state += parseInt(action.value));
    case "Sub":
      return (state -= parseInt(action.value));
    case "Mult":
      return (state *= parseInt(action.value));
    case "Sqr":
      return state * state;
    default:
      return state;
  }
}

export default function App() {
  let [Count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <Global.Provider value={{ Count, dispatch }}>
        <BrowserRouter>
        
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Controller" element={<Controller />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>


        </BrowserRouter>
      </Global.Provider>
    </div>
  );
}
