import React from 'react';
import { useDispatch } from 'react-redux';
import { Calculator } from './features/calculator/Calculator';
import { toggleDisplay } from './features/calculator/calculatorSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button className='open-button' onClick={() => dispatch(toggleDisplay())}>
        Open Calculator
      </button>
      <Calculator />
    </div>
  );
}

export default App;
