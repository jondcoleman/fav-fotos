var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./Routes');

var appUrl = window.location.origin;
var apiUrl = appUrl + '/api/:id';

var App = React.createClass({
  getInitialState: function() {
    return({
      response: true
    })
  },
  render: function() {
      if(this.state.response){
        return (
          <Routes/>
        )
      } else {
        return (
          <div>Loading...</div>
        )
      }
  }
})

ReactDOM.render(
  <App/>,
  document.getElementById('content')
);
