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
		this.setState({value: this.state.value === 'X' ? 'O' : 'X'});    
  },


  'render': function onRender () {
	return (
	<ul>
	  <button style={boxStyle} onClick={this.handleClick} >{this.state.value}</button>
	  
	</ul>
    );
  }
});

var Row = React.createClass({
	getInitialState: function(){
		return{
			//value: this.props.initialValue
			return {boxRow : ['-','-','-']};
		};
	},

	'render': function onRender () {

		var box = this.state.boxRow.map(function(value,index){

		return (
		<Box value={value} key={index} rowIndex={index} />
		);

		});

		return( <ul> {box} </ul> );



	/*return (
		<ul>
-      	<Box initialValue=" "/>
-      	<Box initialValue=" "/>
-      	<Box initialValue=" "/>
-      </ul>
    );*/
  }


});
	
//React.render(<Box initialValue = 'X'/>, document.body);
	React.render(<Row />, document.body);