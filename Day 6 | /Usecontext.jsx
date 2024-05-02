// CounterContext.js
import React, { createContext, useState, useContext } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};



// -----------------------------
// App.js
import React from 'react';
import CounterComponent from './CounterComponent';
import { CounterProvider } from './CounterContext';

const App = () => {
  return (
    <CounterProvider>
      <div>
        <h1>My Counter App</h1>
        <CounterComponent />
      </div>
    </CounterProvider>
  );
};

export default App;
