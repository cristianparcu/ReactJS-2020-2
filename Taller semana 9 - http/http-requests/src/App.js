import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'
import Carousel from './components/Carousel/Carousel'

class App extends Component {
  constructor() {
    super();
    this.state = {
      filmsList: [],
    };
  }

  loadData() {
    axios
      .get(`https://api.npoint.io/a3e32743db51c6317d48`, {})
      .then((res) => {
        const data = res.data;
        console.log(data.peliculas);
        this.setState({filmsList:data.peliculas});
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.loadData();
  }
  render() {
    return (
      <div className="App">
        
        <Carousel peliculas={this.state.filmsList}/> 
      </div>
    );
  }
}

export default App;
