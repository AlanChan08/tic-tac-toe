'use strict';

var React = require('react');

var boxStyle = {
	height:'100px',
	width:'100px'
};

var Box = React.createClass({
	getInitialState: function(){
		return{
			value: this.props.initialValue
		};
	},

	componentWillMount: function() { 
		var currentState = this; 
		this.timer = setInterval(function(){ 
			var oldValue = currentState.state.value; 
			var newValue = oldValue == 'X' ? 'O' : 'X'; 
			currentState.setState({value: newValue}); 
		},300); 
	},


  'render': function onRender () {
	return (
	  <button style={boxStyle} >{this.state.value}</button>
    );
  }
});
	
React.render(<Box initialValue = 'X'/>, document.body);
