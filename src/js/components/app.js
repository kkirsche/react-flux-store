/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions.js');

var App = React.createClass({
  handleClick: function (action) {
    AppActions.addItem('this is the item')
  },
  render: function () {
    return <h1 onClick={this.handleClick}>My App</h1>
  }
});

module.exports = App;
