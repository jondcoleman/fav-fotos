var React = require('react');
var Nav = require('./Nav');
var Ajax = require('simple-ajax');

module.exports = React.createClass({
	getInitialState: function() {
		return({
			user: undefined
		})
	},
	componentDidMount: function(){
    var ajax = new Ajax({
      url: '/api/user',
      method: 'GET',
    })
      .on('success', function(e){
        if(e.currentTarget.status === 204){ return };
        this.setState({
          user: JSON.parse(e.currentTarget.response),
        })
      }.bind(this))
      .on('error', function(e){
        alert('Login Failed')
      })
    ajax.send();

		//materialize mobile navigation
		$(".button-collapse").sideNav();
  },
	render: function(){
		var childrenWithProps = React.Children.map(this.props.children, function(child){
			return React.cloneElement(child, {user: this.state.user})
		}.bind(this))
		return (
			<div>
				<Nav user={this.state.user}/>
				{childrenWithProps}
			</div>
		)
	}
})
