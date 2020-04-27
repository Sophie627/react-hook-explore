import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  function change() {
    setCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  console.log(color);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={change}>Change!</button>
    </div>
  );
}

export default App;
