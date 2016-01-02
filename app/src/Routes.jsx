var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var Grid = require('./components/Grid');
var Main = require('./components/Main');


module.exports = React.createClass({
	// requireLogin: function (nextState, replaceState) {
	// 	if (!this.props.user) {
	// 		replaceState({ nextPathname: nextState.location.pathname }, '/Login')
	// 	}
	// },
	render: function() {
		var UserGrid = React.createClass({
			render: function() {
				return (
					<Grid type="user" userId={this.props.routeParams.userId} user={this.props.user}/>
				)
			}
		})

		var UsersGrid = React.createClass({
			render: function() {
				return (
					<Grid type="users" user={this.props.user}/>
				)
			}
		})

		return (
			<Router>
				<Route path="/" component={Main}>
					<IndexRoute component={Grid}/>
					<Route path="/my_favs" component={UserGrid}/>
					<Route path="/users" component={UsersGrid}/>
					<Route path="/user/:userId" component={UserGrid}/>
				</Route>
			</Router>
		)
	}
})
