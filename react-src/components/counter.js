'use strict';

import React from 'react';
import { connect } from 'react-redux';

var Counter = React.createClass({
  handleIncrement : function(){
    this.props.increment();
  },

  handleDecrement : function(){
    this.props.decrement();
  },

  render: function(){
    return (
      <div className="counter">
        <h2>This is the redux counter</h2>
        <p>Counter: {this.props.counter}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment : () => {
      dispatch({
        type: "INCREMENT"
      })
    },
    decrement : () => {
      dispatch({
        type: "DECREMENT"
      })
    }
  }
}

Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

module.exports = Counter;