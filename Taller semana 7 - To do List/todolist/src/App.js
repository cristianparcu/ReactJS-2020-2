import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputList from './Components/Todo_Input/InputList'
import ButtonList from './Components/Button/ButtonList'
import List from './Components/List/List'

function App(props) {
  const [Items, setItems] = useState([]);
  const [Selecteditem,setSelecteditem] = useState(null);
  
  const addTask =async(e)=>{
    e.preventDefault();
    const item =  Selecteditem;
   await setItems([...Items,item]);
  }
  const handleInput=(e)=>{
    setSelecteditem(e.target.value)
  }
  const deleteItem=  (index)=>{
    const test = [...Items]
    test.splice(index,1)
    console.log(test,"test")
      setItems(test);
    
   }


  return (
    <div className="App">
      <h1>Add your tasks</h1>
      <form onSubmit={addTask}> 
      <InputList val={Selecteditem} change={handleInput}/>
      <ButtonList />
      </form>
      <h2>To Do List</h2>
      <List Items={Items} deleteItem={deleteItem}/>

    </div>
  );
  }

export default App;
