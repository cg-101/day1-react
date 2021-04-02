import React from "react";

export default function App() {
  return (
    <div>
      <ComponentA />
    </div>
  );
}

function ComponentA() {
  // logic data, functions
  let i=0;
  let str = "my project";
  let list = [1, 2, 3, 4];

  let myFunction = function() {
    console.log("I am clicked!!!", new Date());
  }
  
  let myFunction1 = ()=> {
    console.log("I am Arrow Function!!!", new Date());
  }
  
  return (
    <div>
      <div>Hello World</div>
      <button onClick={myFunction}>Click Me 1</button>
      <button onClick={() => myFunction()}>Click Me 2</button>

      <button onClick={myFunction1}>Aroow Me 1</button>
      <button onClick={() => myFunction1()}>Aroow Me 2</button>
    </div>
  );
}
