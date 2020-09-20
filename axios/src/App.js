import React from 'react';
import styles from './App.module.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

library.add(faTrash)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.setStyle = this.setStyle.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: '',
          checked: false
        }
      })
    }
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
        checked: false
      }
    })
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })
  }
  setUpdate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        console.log(item.key + "    " + key)
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }
  setStyle(key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        console.log(item.key + "    " + key)
        item.checked = !item.checked;
      }
    })
    this.setState({
      items: items
    })
  }

//COMPONENT 
componentDidMount () {
  axios.get('./tasks.json')
      .then(response => {
          const items = response.data.slice(0,10);

          const updatedItems = items.map(item => {
              return {
                text: item.text,
                key: item.key,
                checked: item.checked
              }
          });

          this.setState({items: updatedItems})
      });
} //Traerá todo del JSON

  render() {
    return (
      <div className={styles.app}>
        <header>
          <form id={styles["to-do-form"]} onSubmit={this.addItem}>
            <input className = {styles.specialInput} type="text" placeholder="Tarea" value={this.state.currentItem.text} onChange={this.handleInput}></input>
            <button type="submit">Añadir</button>
          </form>
          <p>{this.state.items.text}</p>
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} setStyle={this.setStyle}/>
        </header>
      </div>
    );
  }
}


export default App;