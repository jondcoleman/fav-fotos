var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var Login = require('./components/Login');
var Grid = require('./components/Grid');
var Main = require('./components/Main');

module.exports = React.createClass({
	// requireLogin: function (nextState, replaceState) {
	// 	if (!this.props.user) {
	// 		replaceState({ nextPathname: nextState.location.pathname }, '/Login')
	// 	}
	// }, 
	render: function() {
		return (
			<Router>
				<Route path="/" component={Main}>
					<IndexRoute component={Grid}/>
				</Route>
				<Route path="/Login" component={Login}/>
			</Router>
		)			
	}
})