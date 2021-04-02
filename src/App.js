import React from "react";

export default function App() {
  return (
    <div>
      <ComponentA />
      <ComponentA />
      <ComponentA />
    </div>
  );
}

/**
 * <ComponentA />
 * @returns
 */
function ComponentA() {
  // LOGIC :: JS
  let i = 100;
  let str = "My Project";
  let total = i + 100;

  // UI
  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet. {i} {str} {total}
      </div>
      <hr />
    </div>
  );
}
