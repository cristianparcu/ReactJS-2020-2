import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import axios from './Instances/axiosInstance';
import Library from './Components/Library/Library';

class App extends Component {
  state = {
    libros: [],
    newBookInfo: {
      title: "",
      author: "",
      price: "",
      foto: ""
    }
  }

  componentDidMount () {
    axios.get('/libros')
      .then(response => {
        const libros = response.data.slice(0,11);
        
        const updatedBooks = libros.map(book => {
          return {
            title: book.titulo.slice(0,10),
            author: book.Autor,
            price: book.precio,
            photo: book.foto
          }
        });

        this.setState({libros: updatedBooks})
        console.log("libros de axius");
        console.log(libros);
      })
  }

  componentShouldUpdate(nextProps, nextState) {
    return nextState.openPostIndex !== this.state.openPostIndex;
  }

  render () {
    console.log("libros del render");
        console.log(this.state.libros);
    return(
      <div>
        <h1 className = {classes["main-title"]}>Mi librería personal</h1>
        {/* {this.state.libros.map((libros, librosIndex) => this.renderLibros(libros, librosIndex))} */}
        <Library libros = {this.state.libros} />
      </div>
    )
  }


}

export default App;
