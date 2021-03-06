var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var ImageHiddenOnError = require('./ImageHiddenOnError')

module.exports = React.createClass({
	render: function() {
		return (
          <div className="grid-item">
            <div className="card medium">
              <div className="card-image">
                <ImageHiddenOnError image={this.props.image}/>
              </div>
              <div className="card-content">
                <p>{this.props.title}</p>
              </div>
              <div className="card-action">
								{this.props.type !== 'users' ?
									<a href={this.props.image} target="blank"><div className="btn-floating btn-large"><i className="material-icons">open_in_new</i></div></a>
									:
									<Link to={this.props.link}><div className="btn-floating btn-large"><i className="material-icons">open_in_new</i></div></Link>
							 	}
                {this.props.allowDelete ? <div className="btn-floating btn-large red card-btn-delete" onClick={this.props.handleDelete}><i className="material-icons">delete</i></div> : null}
              </div>
            </div>
          </div>
		);
	}
})
