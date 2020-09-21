import React, {Component} from 'react'
import styles from './Card.module.scss'

export default class Card extends Component{

  constructor(props){
    super(props);
    this.state = {
      title: '',
      precio: 0,
      imagen: '',
    }
  }

  componentDidMount(){
  }

  handleClick = (e)=>{
      console.log({e:e.target.classList})
      let classList = e.target.classList;
  }

  render(){
    return (
      
        <div className={`${styles.card}`} >
          
          <div className={styles.card__header} onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>
            {this.props.title} por ${this.props.precio}
            
          </div>
          
          <img className={styles.card__foto} src={this.props.imagen}/>
          
        </div>
    )
  }
}