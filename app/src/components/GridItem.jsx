var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
          <div className="grid-item">
            <div className="card medium">
              <div className="card-image">
                <img src={this.props.image.imageUrl}></img>
              </div>
              <div className="card-content">
                <p>{this.props.image.description}</p>
              </div>
              <div className="card-action">
                <div className="btn-floating btn-large"><i className="material-icons">open_in_new</i></div>
                <div className="btn-floating btn-large red card-btn-delete"><i className="material-icons">delete</i></div>
              </div>
            </div>
          </div>
		);
	}
})

