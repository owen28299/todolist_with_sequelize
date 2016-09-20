'use strict';

import React from 'react';
import { connect } from 'react-redux';

var ReduxList = React.createClass({
  getInitialState: function(){
    return {
      newItem: ""
    }
  },

  handleChange: function(event){
    this.setState({
      newItem: event.target.value
    })
  },

  handleSubmit: function(){
    this.props.addItem(this.state.newItem);

    this.setState({
      newItem: ""
    })

  },

  render: function(){

    var list = this.props.reduxlist.map(function(element){
      return (
        <p key={element}>{element}</p>
      )
    })

    return (
      <div className="list">
        <h2>This is the redux list</h2>
        {list}
        <input
          type="text"
          value={this.state.newItem}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>

      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    reduxlist: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem : (item) => {
      dispatch({
        type: 'ADD_ITEM',
        listitem: item
      })
    }
  }
}

ReduxList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxList);

module.exports = ReduxList