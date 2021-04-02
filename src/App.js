import React, { useState } from "react";

export default function App() {
  return (
    <div className="container-fluid">
      <NavigationComponent />
      <MyPostBody />
    </div>
  );
}

function NavigationComponent() {
  return <div className="row bg-dark" style={{ height: 55 }}></div>;
}

function MyPostBody() {
  const [list, setList] = useState([1]);

  const addNewBlock= () => {
    setList([...list, 1])
  }

  return (
    <>
      <button className="btn btn-dark" onClick={addNewBlock}>Add</button>
      {list.map((data) => <div className="row bg-secondary mt-1" style={{ height: 200 }}></div> )}
    </>
  );
}
