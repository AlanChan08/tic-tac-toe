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

/*
	componentWillMount: function() { 
		var currentState = this; 
		this.timer = setInterval(function(){ 
			var oldValue = currentState.state.value; 
			var newValue = oldValue == 'X' ? 'O' : 'X'; 
			currentState.setState({value: newValue}); 
		},300); 
	},
*/
	handleClick: function() {
		var oldValue = this.state.value;
		this.setState({value: this.state.value = oldValue == 'X' ? 'O' : 'X'});    
  },


  'render': function onRender () {
	return (
	  <button style={boxStyle} onClick={this.handleClick} >{this.state.value}</button>
    );
  }
});
	
React.render(<Box initialValue = 'X'/>, document.body);
