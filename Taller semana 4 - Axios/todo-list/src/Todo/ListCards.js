import React, {Component} from 'react'
import Card from './Card'
import styles from './ListCards.module.scss'
import axios from 'axios'


export default class ListCards extends Component{
  constructor(props){
    super(props);
    this.state={cards:[],
      //selectedCache:props.selected,expandedCard:-1
    }
    
  }

  componentDidMount(){
    axios.get('cartas.json').then((response)=>{
      console.log(response.data)
      this.setState({cards: response.data})
    })
    
  }

  render(){
    return (
      <>
        
        <div className={styles.todoList}>
          {this.state.cards.map((card,i)=>(<Card title={card.title} precio={card.precio} imagen={card.imagen}/>))}
        </div>
      </>
    )
  }
}
