import React, { useState } from 'react';
import  './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incCou = () => {
    setCount(count + 1);
  };

  const decCou = () => {
    setCount(count - 1);
  };

  return (
    <>
    <div>
      <h1>
      Counter
    </h1>
           <p className='my-3'>Count: {count}</p>
           <button className="btn btn-outline btn-secondary mx-3"onClick={incCou}>Increment</button>
           <button className="btn btn-outline btn-primary mx-2 my-3 " onClick={decCou}>Decrement </button>
           
    </div>
    </>
  );
};

export default Counter;