var React = require('react');
var GridItem = require('./GridItem');
var Masonry = require('react-masonry-component')(React); 
var ModalAdd = require('./ModalAdd');
var ajax = require('../ajax-functions');

// var images = [
//   {
//     _id: 1,
//     imageUrl: "/public/img/clementine_150.png",
//     description: "This is a description of the image"
//   },
//   {
//     _id: 2,
//     imageUrl: "/public/img/clementine_150.png",
//     description: "This is a description of the image"
//   },
//   {
//     _id: 3,
//     imageUrl: "/public/img/clementine_150.png",
//     description: "This is a description of the image"
//   },
//   {
//     _id: 4,
//     imageUrl: "/public/img/clementine_150.png",
//     description: "This is a description of the image"
//   },
//   {
//     _id: 5,
//     imageUrl: "/public/img/clementine_150.png",
//     description: "This is a description of the image"
//   },
//   {
//     _id: 6, 
//     imageUrl: "/public/img/clementine_150.png",
//     description: "This is a description of the image"
//   },
// ]

// var GridItemList = images.map(function(item){
//   return <GridItem key={item._id} image={item}/>
// })

module.exports = React.createClass({
	getInitialState: function(){
        return {
            images: undefined
        }
    },
    componentDidMount: function() {
        ajax('GET', '/api/images', function(result){
            console.log(JSON.parse(result))
            this.setState({
                images: JSON.parse(result)
            })
        }.bind(this))
    },
    render: function() {
		return (
      <div className="container">
        <div className="row">
          <div className="col s12 offset-s1">
            <Masonry className={'grid'}>
              {this.state.images ? this.state.images.map(function(item){
                  return <GridItem key={item._id} image={item}/>
              }) : <div>Loading</div>}
            </Masonry>
          </div>
        </div>
        <ModalAdd/>
      </div>
		);
	}
})