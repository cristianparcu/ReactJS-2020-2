import React, {Component} from 'react'
import classes from '../RegPago/RegPago.css'
import { ReactComponent as Dolar} from "./signo-de-dolar.svg";


class RegPago extends Component{
    render(){
        return(
            <li className={classes['body']}>
                <div >
                    <Dolar className={classes['img']}/>
                </div>
                <div >
                    <p>{this.props.date}</p>
                </div>
                <div >
                    <p>${this.props.price}</p>
                </div>
            </li>
        )
    }
}
export default RegPago