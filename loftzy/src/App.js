import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inicio from './views/Inicio'
import AdminMenu from './views/AdminMenu'
import AgregarResidente from './views/AgregarResidente'
import ResidentesAdmin from './views/ResidentesAdmin'
export class App extends Component{
  
  contructor(props){
      super(props);
      
      this.state = {
      paginas : ['Inicio','AdminMenu','ResidentesAdmin','AgregarResidente']
    }
  };
  
render(){
  return (
    
    
    this.state.paginas.map((paginas,index) => {
      return(
      <li key={`item-${index}`}>{paginas}</li>
      )
    })
  
    
   
  );
}}

export default App;
