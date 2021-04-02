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
      <div className="text-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam eum ipsam natus, mollitia unde, repellendus minus quaerat nostrum eos aliquam aliquid sunt facilis officia eveniet laudantium, ea adipisci distinctio quo.</div>
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
}
