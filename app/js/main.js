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

    var number1 = parseInt(this.refs.number1.getDOMNode().value.trim());
    var number2 = parseInt(this.refs.number2.getDOMNode().value.trim());

    if (number1 && number2) {
      this.setState({sum: number1 + number2});
    }
  },

  render: function() {
    return (
        <div className="calculator">
          number1: <input type="text" id="txtNumber1" ref="number1" size="2" /><br />
          number2: <input type="text" id="txtNumber2" ref="number2" size="2" /><br />
          operators: <button id="btnAdd" onClick={this.calculate}>+</button><br /><br />

          sum: <input type="text" id="txtSum" size="2" value={this.state.sum} />
        </div>
    );
  }
});

React.renderComponent(
  <Calculator />,
  document.getElementById('content')
);
