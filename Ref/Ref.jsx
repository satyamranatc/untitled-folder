import React, { useRef } from "react";

export default function App() {
  const x = useRef(null);
  const b = useRef(null);

  const focusInput = () => {
    if (x.current) {
      x.current.focus();
      if (x.current.value.length >= 1) {
        b.current.type = "submit";
        b.current.innerHTML = "Submit";
        console.log("Hiii");
      } else {
        b.current.type = "default";
        b.current.innerHTML = "Focus";
        console.log("Hiii");
      }
    }
  };

  return (
    <div>
      <center>
        <h1>App</h1>
        <hr />

        <input
          ref={x}
          type="text"
          style={{ padding: "10px 20px", fontSize: "30px" }}
        />
        <br />

        <button ref={b} onClick={focusInput}>
          Focus
        </button>
      </center>
    </div>
  );
}
