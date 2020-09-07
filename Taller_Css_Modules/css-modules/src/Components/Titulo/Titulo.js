import React, { PureComponent } from 'react'
import classes from './Titulo'
class Titulo extends PureComponent {
    

    render() {
        return (
            <div className={classes.main}>
                <h1 className={classes["title"]}>
                    {this.props.Titulo}
                </h1>
            </div>
        )
    }
}

export default Titulo