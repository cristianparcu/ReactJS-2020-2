import React from 'react';
import classes from './App.css';
import Task from './components/Task.js'
import InputBar from './components/InputBar.js'
function App() {
  return (
    <div className="App">
     <h1 className={classes.heading}>Hello World</h1>
     <InputBar/>
     <Task task="hi"/>
    </div>
  );
}

export default App;
