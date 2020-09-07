import React, { Component } from "react";
import Style from "./App.module.css";
import Header from "./Components/Header/header";
import Forms from "./Components/Forms/Form"


class App extends Component {
  render() {
    return <><h1 className={Style.h1}>Hola Mundo</h1>
    <Header/>
    <Forms />
  </>
  }
  
}

export default App;
