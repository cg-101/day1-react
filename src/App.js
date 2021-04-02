import React, { useState } from "react";

export default function App() {
  return (
    <div>
      <ComponentA />
    </div>
  );
}

function ComponentA() {
  let [counter, setCounter] = useState(100);
  
  const icounter = () => {
    console.log(counter);
    setCounter(counter + 1);
  }
  
  return (
    <div>
      <div>{counter}</div>
      <button onClick={icounter}>Update Counter</button>
    </div>
  );
}
