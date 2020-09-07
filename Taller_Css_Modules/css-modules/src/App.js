import React from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Titulo from './Components/Titulo/Titulo'
import Formulario from './Components/Formulario/Formulario';
import Lista from './Components/Lista/Lista';
import Boton from './Components/Boton/Boton'
import Instrucciones from './Components/Instruciones/Instrucciones'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.head}><Titulo className={classes['head']} Titulo="To do List"/></div>
        <div className={classes.gridcontainer}>
          <div>
            <Formulario agregarF={this.agregar}></Formulario>
            <div className={classes.item2}><Boton deleteF={this.delete}></Boton></div>
            <div className={classes.instru}><Instrucciones></Instrucciones></div>
          </div>
          <div className={classes.item1}><Lista updateF={this.update} todos={this.state.todos}></Lista></div>
        </div>
      </div>
    )
  }

  componentDidMount = () => {
    let todos = localStorage.getItem('todos');
    if (todos) {
      let todosSave = JSON.parse(todos);
      this.setState({ todos: todosSave });
    } else {
      console.log('No tiene');
    }
  }

  agregar = async (todo) => {
    
    await this.setState({todos: [...this.state.todos, {
      text: todo,
      completed: false
    }]});
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
    console.log(localStorage.getItem('todos'))
  }

  update =  async (todo) => {
    let nuevo = this.state.todos.map(_todo => {
      if(todo === _todo)
      
        return{
          text: todo.text,
          completed: !todo.completed
        }
        else
        return _todo
      
    });
    this.setState({todos: nuevo});
    console.log(nuevo);
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  delete = async(todo)=>{
    localStorage.clear(todo);
    window.location.reload(false);
    console.log('eliminar');
  }
  //
}

export default App
