var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

module.exports = React.createClass({
	render: function() {
		return (
			<div className="header">
				<nav>
				<div className="nav-wrapper teal">
					<a href="#!" className="brand-logo">Fav Fotos</a>
					<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
					<ul className="right hide-on-med-and-down">
					<li><a href="badges.html">My Favs</a></li>
					<li><a href="collapsible.html">All Favs</a></li>
					<li><a href="mobile.html">Login</a></li>
					</ul>
					<ul className="side-nav" id="mobile-demo">
					<li><a href="badges.html">My Favs</a></li>
					<li><a href="collapsible.html">All Favs</a></li>
					<li><a href="mobile.html">Login</a></li>
					</ul>
				</div>
				</nav>
			</div>		
		)
	}
});