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
                <p>{this.props.image.title}</p>
              </div>
              <div className="card-action">
                <a href={this.props.image.imageUrl} target="blank"><div className="btn-floating btn-large"><i className="material-icons">open_in_new</i></div></a>
                {this.props.type === 'user' ? <div className="btn-floating btn-large red card-btn-delete" onClick={this.props.handleDelete}><i className="material-icons">delete</i></div> : null}
              </div>
            </div>
          </div>
		);
	}
})
