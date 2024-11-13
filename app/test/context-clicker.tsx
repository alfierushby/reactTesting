'use client'

import { useCounter } from './context-counter-provider';
import React from 'react';


export default function Clicker() {
    // Get the context count state
    const [count, setCount, name] = useCounter();

    return (
        <div> 
          <h1>Hello {name}!</h1>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      )

}