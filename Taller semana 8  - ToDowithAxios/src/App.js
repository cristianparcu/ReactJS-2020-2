import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems' //Importo el componente Lista
import { library } from '@fortawesome/fontawesome-svg-core' //Importo icono del delete
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
library.add(faTrash)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem:{
        text:'',
        key: ''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.setStyle = this.setStyle.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const nuevoItem = this.state.currentItem;
    if(nuevoItem.text !==""){
      const items = [...this.state.items, nuevoItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
     const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
              item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }

  setStyle(key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key=== key) {
        console.log(item.key + "    " + key)
      }
    })
    this.setState({
      items: items
    })
  }

  componentDidMount () {
    axios.get('./lista.json')
        .then(response => {
            const items = response.data.slice(0,4);
            const updatedItems = items.map(item => {
                return {
                  text: item.text,
                  key: item.key,
                }
            });
  
            this.setState({items: updatedItems})
        });
  }
 
  componentPost(){
  axios.post('./lista.json')
      .then(response => {
        const items = items;
        console.log(response);
        console.log(response.data);
      })
  }

 render(){
  return (
    <>
    <div>
      <h1>To do list</h1>
    </div>

    <div className="App">
      <header>
       
        <form id="principal" onSubmit={this.addItem}>
          <input type="text" placeholder="Agrega una tarea" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="Submit">Agregar</button>
        </form>
        <p>{this.state.items.text}</p>
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} setStyle={this.setStyle}/>
      </header>
    </div>

    <div>
      <footer>
      <p>Edwin Alejandro Ramos Beltran ID:0000162427 React</p>
      </footer>
    </div>
    </>
  );
 }
}


export default App;
