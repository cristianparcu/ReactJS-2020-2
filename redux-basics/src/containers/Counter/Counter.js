import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Counter.css';

import * as actionTypes from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div className="counter-container">
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd( 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract( 5 )}  />
                <CounterControl label={"Save value"} clicked={() => this.props.onSave(this.props.ctr)}/>
                <ul>
                    {this.props.values.map(value => <li>{value}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counterStore.counter,
        values: state.persistStore.values
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdd: (value) => dispatch({
            type: actionTypes.ADD,
            payload: {
                value: value
            }
        }),
        onSubtract: (value) => dispatch({
            type: actionTypes.SUBTRACT,
            payload: {
                value: value
            }
        }),
        onSave: (value) => dispatch({
            type: actionTypes.SAVE,
            payload: {
                value: value
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
