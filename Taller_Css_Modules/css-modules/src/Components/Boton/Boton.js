import React from 'react'
import classes from './Boton.css'

class Boton extends React.Component {

    render() {
        return (
           <div className={classes.bod}>
               <button type="button" value="Borrar" onClick={this.props.deleteF}>
               <span></span><span></span><span></span><span></span> Borrar todo
               </button>
           </div> 
        )
    }


}

export default Boton