import React, { Component } from 'react'
import Completedcss from './Completed.css';
import Listcss from "../Lists.css";
import Appcss from "../../../App.css";
import icons from "../../../extras/fontawesome-free/css/all.min.css";
class Completed extends Component {
    render() {
        return (
            <div className={Listcss.task}>
                <p className={Completedcss.through}>{this.props.text}</p>
                <button type="button" className={`${Appcss.btn} ${Appcss["btn-primary"]} ${Completedcss["rg-25"]}`} onClick={() => { this.props.onClick(this.props.id, 0) }}>
                    <i className={`${icons.fa} ${icons["fa-arrow-left"]}`}></i>
                </button>
                <button type="button" className={`${Appcss.btn} ${Appcss["btn-danger"]}`} onClick={() => { this.props.onClick(this.props.id, 2) }}>
                    <i className={`${icons.fa} ${icons["fa-trash"]}`}></i>
                </button>
            </div>
        );
    }
}

export default Completed;