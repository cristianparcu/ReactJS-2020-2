import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import TodoForm from './components/TodoForm'
library.add(faTrash)

class App extends React.Component {
  
 render(){
  return (
    <TodoForm/>
  );
 }
}


export default App;
