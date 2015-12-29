var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="fixed-action-btn">
				<button className="btn btn-floating btn-large teal modal-trigger" data-target="modal1">
				<i className="large material-icons">library_add</i>
				</button>
			</div>
		)
	},
	componentDidMount: function(){
		//materialize modal trigger
		$('.modal-trigger').leanModal();
	}
});
