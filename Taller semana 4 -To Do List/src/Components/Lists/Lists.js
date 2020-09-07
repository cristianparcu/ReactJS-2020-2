import React, { Component } from 'react';
import ToDo from "./ToDo/ToDo.js"
import Completed from "./Completed/Completed.js"
import Listcss from "./Lists.css"

class Lists extends Component {
  getByState = (tasks, state) => {
    return tasks.filter(task => task.state === state);
  }
  render() {
    return (
      <>
        <div className={Listcss["card-body"]}>
          <h3> You have {this.getByState(this.props.tasks, 0).length} pending tasks.</h3>
          {this.getByState(this.props.tasks, 0).map((todo) =>
            <ToDo text={todo.text} state={todo.state} key={todo.index} id={todo.index} onClick={this.props.updateState} />
          )}
        </div>
        <div  className={Listcss["card-footer"]}>
          <h3>Completed</h3>
          {this.getByState(this.props.tasks, 1).map((todo) =>
            <Completed text={todo.text} state={todo.state} key={todo.index} id={todo.index} onClick={this.props.updateState} />
          )}
        </div>
      </>
    );
  }
}
export default Lists;
