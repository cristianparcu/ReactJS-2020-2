import React from 'react';
import './App.css';
import ListItems from "./functional component/ListItem"
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBan} from "@fortawesome/free-solid-svg-icons";
library.add(faBan)

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
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    handleInput(event){
        this.setState({
            currentItem:{
                text: event.target.value,
                key: Date.now()
            }
        })
    }

    addItem(event){
        event.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text !==''){
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }
    deleteItem(key){
        const filterItems = this.state.items.filter(item => item.key !== key);
        this.setState({
            items: filterItems
        })
    }
    render() {
        return (
            <div className="to-do">
                <header>
                    <h1>React To-do list</h1>
                    <form className="to-do-form" onSubmit={this.addItem}>
                        <input type="text" placeholder="Añade una tarea" value={this.state.currentItem.text}
                               onChange={this.handleInput}/>
                        <button type="submit">Agregar</button>
                    </form>
                </header>
                <ListItems items={this.state.items} deleteItem = {this.deleteItem} />
            </div>
        );
    }
}

export default App;
