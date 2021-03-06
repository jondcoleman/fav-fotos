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
					<Link to="/" className="brand-logo">Fav Fotos</Link>
					<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
					<ul className="right hide-on-med-and-down">
					<li><Link to="/">All Favs</Link></li>
					<li><Link to="/users">Users</Link></li>
					{this.props.user ? <li><Link to={"/user/" + this.props.user._id}>My Favs</Link></li> : null}
					{this.props.user ?
						<li><a href="/logout">Logout</a></li>
						:
						<li><a href="/auth/twitter/callback">Login/Register</a></li>
					}
					</ul>
					<ul className="side-nav" id="mobile-demo">
					<li><Link to="/">All Favs</Link></li>
					<li><Link to="/users">Users</Link></li>
					{this.props.user ? <li><Link to={"/user/" + this.props.user._id}>My Favs</Link></li> : null}
					{this.props.user ?
						<li><a href="/logout">Logout</a></li>
						:
						<li><a href="/auth/twitter/callback">Login/Register</a></li>
					}
					</ul>
				</div>
				</nav>
			</div>
		)
	}
});
