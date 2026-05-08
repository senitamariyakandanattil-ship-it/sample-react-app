import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

        const increase =() => {
            setCount(count + 1);
        };
        const decrease =() => {
            setCount(count - 1);
        };
        const reset =() => {
            setCount(0);
        };
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>Count</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>reset</button>
    </div>
   
  )
}

export default Counter