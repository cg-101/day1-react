import React from "react";

export default function App() {
  return (
    <div>
      <ComponentA />
      <ComponentA />
      <ComponentB />
    </div>
  );
}

/**
 * <ComponentB />
 * @returns
 */
function ComponentB() {
  let i = 100;
  let list = [1, 2, 3];

  return (
    <div>
      <div>Lorem, ipsum. {i}</div>

      {list.map(function () {
        return <div>AAA</div>;
      })}

      {list.map(() => {
        return <div>BBBB</div>;
      })}

      
      {list.map(() => <div>DDD</div>)}  

      {list.map(() => (
        <div>
          <div>CCC</div>
        </div>
      ))}
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
