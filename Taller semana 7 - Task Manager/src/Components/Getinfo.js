import React from 'react';
import styles1 from './Getinfo.module.scss'
import styles2 from '../index.module.scss'

class Getinfo extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleChange(event) {
    if (event.target.className === styles1.inputTitle) {
      this.setState({title: event.target.value});
    } else {
      this.setState({description: event.target.value});
    }
  }
    
  handleSubmit(event) {
    if (this.state.title === '' || this.state.description === '') {
      alert('Debe llenar todos los campos para crear una tarea.')
    } else {
      this.props.addTask(this.state.title, this.state.description);
      this.clearInputs();
    }
  }

  clearInputs() {
    this.setState({title: '', description: ''});
  }
    
  render() {

    return (
      <div className={`${styles1.form} ${styles2.flex} ${styles2.flex_dir_col} ${styles2.flex_ai_c}`}>
        <input className={`${styles1.inputTitle}`} type="text" value={this.state.title} onChange={this.handleChange} placeholder='Título' />
        <textarea className={`${styles1.inputDescr}`} value={this.state.description} onChange={this.handleChange} placeholder='Descripción'></textarea>
        <button className={`${styles1.inputAdd}`} onClick={this.handleSubmit}>Añadir Tarea</button>
      </div>
    )
  }
}

export default Getinfo;