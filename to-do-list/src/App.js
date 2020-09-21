import React, { Component } from "react";
import Header from "./Components/Header/header";
import Form from "./Components/Task/Task";
import Style from "./Form.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        id: "",
      },
    };
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    const nuevoItem = this.state.currentItem;
    if (nuevoItem.text !== "") {
      const items = [...this.state.items, nuevoItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          id: "",
        },
      });
    }
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        id: Date.now(),
      },
    });
  }
  deleteItem(id) {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  }
  setUpdate(text, id) {
    const items = this.state.items;
    items.map((item) => {
      if (item.id === id) {
        console.log(item.id + "    " + id);
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }
  render() {
    return (
      <>
        <div>
          <Header />
        </div>

        <div className="App">
          <form className={Style.form} onSubmit={this.addItem}>
            <input
              className={Style.input}
              type="text"
              placeholder="Ingrese una tarea"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
            <button className={Style.button} type="Submit">
              Añadir
            </button>
            <Form
              items={this.state.items}
              deleteItem={this.deleteItem}
              setUpdate={this.setUpdate}
            />
          </form>
          <p>{this.state.items.text}</p>
        </div>
      </>
    );
  }
}

export default App;
