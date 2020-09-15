import React, { Component } from 'react';
import Lists from "./Components/Lists/Lists.js"
import Form from "./Components/Form/Form.js"
import Appcss from './App.css';
import axios from './config/axiosInstance.js';

class App extends Component {

  state = {
    tasks: []
  }
  componentDidMount() {
    axios.get("/")
      .then(response => {
        this.drawTasks(response.data);
      });
  }
  drawTasks = (newList) => {
    this.setState({
      tasks: newList.map((e) => { return { index: e.indice, text: e.texto, state: e.estado } })
    });
  }
  updateState = (index, state) => {
    axios.put("/", null, {
      params: { indice: index, estado: state }
    }).then(response => {
      this.drawTasks(response.data);
    });
  }
  addTask = (val) => {
    axios.post("/", null, {
      params: { texto: val }
    }).then(response => {
      this.drawTasks(response.data);
    });
  }

  render() {
    return (
      <div className={Appcss.card}>
        <div className={Appcss["card-header"]}>
          <Form addTask={this.addTask} />
        </div>
        <Lists tasks={this.state.tasks} updateState={this.updateState} />
      </div>
    );
  }
}
export default App;
