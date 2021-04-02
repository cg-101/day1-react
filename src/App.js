import React from "react";

export default function App() {
  return (
    <div>
      <ComponentA />
      <ComponentA />
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
  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Laboriosam ipsum repudiandae vel, qui nihil ipsa commodi repellat
        eaque tempora ducimus veniam cupiditate maxime! Ducimus accusantium
        perspiciatis laboriosam aut quae neque!
      </div>
      <hr />
    </div>
  );
}
