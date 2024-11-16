'use client';

import React from 'react';

// Creates a context to be accessed.
const CounterContext = React.createContext<
  [number, React.Dispatch<React.SetStateAction<number>>,string] | undefined
>(undefined);

// Add a tag name to be defined in the context
// To be used to wrap around children that use the context
export function CounterProvider({ children, name }: { children: React.ReactNode, name: string }) {
  const [count, setCount] = React.useState(0);
  return (
    <CounterContext.Provider value={[count, setCount, name]}>
      {children}
    </CounterContext.Provider>
  );
}

// To be used within components that want to use the context
export function useCounter() {
    const context = React.useContext(CounterContext);
    if (context === undefined) {
      throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
  }
