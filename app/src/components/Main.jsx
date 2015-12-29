var React = require('react');
var Nav = require('./Nav');
var AddButton = require('./AddButton');
var Ajax = require('simple-ajax');

module.exports = React.createClass({
	getInitialState: function(){
		return ({
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
          user: JSON.parse(e.currentTarget.response)
        })
        console.log(this.state.user)
      }.bind(this))
      .on('error', function(e){
        alert('Login Failed')
      })
    ajax.send();

		//materialize mobile navigation
		$(".button-collapse").sideNav();
  },
	render: function(){
		return (
			<div>
				<Nav user={this.state.user}/>
				{this.props.children}
				{this.state.user ? <AddButton /> : null}
			</div>
		)
	}
})
