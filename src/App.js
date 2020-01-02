import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const subract = () => {
    setCount(count <= 0 ? 0 : count - 1);
  };

  return (
    <React.Fragment>
      <p>SSR Example Calculations</p>
      <p>Sum of Value : {count}</p>
      <button onClick={add}>+ Add</button>
      <button onClick={subract}>- Subract</button>
    </React.Fragment>
  );
}

export default App;
