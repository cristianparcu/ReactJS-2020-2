import React from "react";
import "./App.css";
import Lista from"./Lista";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        Key: '',
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.agregarItem = this.agregarItem.bind(this);
  }
  agregarItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
        const items = [...this.state.items, newItem];
        this.setState({
         items: items,
         currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
 
  render() {
    return (
      <div className="App">
        <header>
          <form id="todo-form" onSubmit={this.agregarItem}>
            <input
              type="text"
              placeholder="Ingrese el texto"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
            <button type="submit">Agregar</button>
          </form>
        </header>
        <Lista items= {this.state.items}></Lista>
      </div>
    )
  }
}

export default App;
