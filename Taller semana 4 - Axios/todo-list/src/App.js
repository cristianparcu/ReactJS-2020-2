import React, {Component} from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

import Header from './Extra/Header'
import ListCards from './Todo/ListCards'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selected: 1,
      selectedName:'',
      
    }
  }

  componentDidMount(){
  }

  render(){
    
    return (
      <div className={styles.app}>

        <Header/>
        <ListCards/>
        
      </div>
    );
  }
}

export default App;
