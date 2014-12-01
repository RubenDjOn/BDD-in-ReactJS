/**
 * @jsx React.DOM
 */

var Reqct = require('react');


var Calculator = React.createClass({
  getInitialState: function() {
    return {sum: 0};
  },

  calculate: function(e) {
    e.preventDefault();

    console.log(this.refs.number1.getDOMNode().value.trim());
    console.log(this.refs.number2.getDOMNode().value.trim());
    var number1 = parseInt(this.refs.number1.getDOMNode().value.trim());
    var number2 = parseInt(this.refs.number2.getDOMNode().value.trim());

    if (number1 && number2) {
      this.setState({sum: number1 + number2});
    }
  },

  render: function() {
    return (
        <div className="calculator">
          <input type="text" ref="number1" size="2" onChange={this.calculate} />
          +
          <input type="text" ref="number2" size="2" onChange={this.calculate} />
          =
          <input type="text" ref="sum" size="2" value={this.state.sum} />
        </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

React.renderComponent(
  <Calculator />,
  document.getElementById('content')
);
