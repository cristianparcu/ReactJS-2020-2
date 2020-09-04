import React from 'react';
import classes from './App.css';
import List from './components/list.js'

function App() {
  return (
    <div className="App">
     <h1 className={classes.heading}>todo-y</h1>
    <List/>
    </div>
  );
}

export default App;
