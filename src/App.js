import React, { useState } from "react";

export default function App() {
  return (
    <div>
      <ComponentA />
    </div>
  );
}

function ComponentA() {
  return (
    <div>
      <div className="bg-danger text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam eum ipsam natus, mollitia unde, repellendus minus quaerat nostrum eos aliquam aliquid sunt facilis officia eveniet laudantium, ea adipisci distinctio quo.</div>
      <button className="btn btn-warning">Click Me</button>
    </div>
  );
}
