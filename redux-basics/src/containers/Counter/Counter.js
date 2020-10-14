import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Counter.css';

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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAdd: (value) => dispatch({
            type: 'ADD',
            payload: {
                value: value
            }
        }),
        onSubtract: (value) => dispatch({
            type: 'SUBTRACT',
            payload: {
                value: value
            }
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
