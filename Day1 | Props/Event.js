/* eslint-disable no-unused-vars */
import React from "react";

export default function App() {
  let Name = "Ajay";
  return (
    <div>
      <center>
        <h1>Hello {Name}</h1>

        <button
          onClick={() => {
            console.log("Hello");
            Name = "Vijay"
            console.log(Name)
          }}
        >
          Click
        </button>
      </center>
    </div>
  );
}
