var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {error: false}
  },
  imageError: function(){
    this.setState({error: true})
    $('.grid').masonry('layout');
  },
	render: function() {
		return (
      <div>
      {this.state.error ?
        <img src='/public/img/No_image.gif'></img>:
        <img src={this.props.image} onError={this.imageError}></img>}
      </div>
		)
	}
});
