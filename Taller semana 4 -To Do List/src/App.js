import React, { Component } from 'react';
import Lists from "./Components/Lists/Lists.js"
import Form from "./Components/Form/Form.js"
import './App.css';
import "./extras/fontawesome-free/css/all.min.css";

class App extends Component {
  state = {
    tasks: []
  }
  updateState = (index, state) => {
    const newTask = { ...this.state.tasks[index] };
    const newArr = [...this.state.tasks];
    newTask.state = state;
    newArr[index] = newTask;
    this.setState({ tasks: newArr });
  }
  addTask = (val) => {
    this.setState({ tasks: [...this.state.tasks, { index: this.state.tasks.length, text: val, state: 0 }] });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <Form addTask={this.addTask} />
        </div>
        <Lists tasks={this.state.tasks} updateState={this.updateState} />
      </div>
    );
  }
}
export default App;
