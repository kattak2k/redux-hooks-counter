import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Counter : {counter}</h1>
      <button onClick={(()=> dispatch({type: 'INCR'}))}>Increment </button>
      <button onClick={(()=> dispatch({type: 'DECR'}))}>Decrement </button>
    </div>
  );
}

export default App;
