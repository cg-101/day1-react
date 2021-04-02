import React from "react";

export default function App() {
  return (
    <div>
      <ComponentA />
    </div>
  );
}

function ComponentA() {
  let counter  = 100;

  const myCounter = () => {
    console.log(counter);
    counter = counter + 1;
  }
  
  return (
    <div>
      <div>{counter}</div>
      <button onClick={myCounter}>Update Counter</button>
    </div>
  );
}
