var React = require('react');
var Nav = require('./Nav');
var AddButton = require('./AddButton');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<Nav/>
				{this.props.children}
				<AddButton />
			</div>
		)
	}
})