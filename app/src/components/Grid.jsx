var React = require('react');
var GridItem = require('./GridItem');

var images = [
  {
    _id: 1,
    imageUrl: "/public/img/clementine_150.png",
    description: "This is a description of the image"
  },
  {
    _id: 2,
    imageUrl: "/public/img/clementine_150.png",
    description: "This is a description of the image"
  },
  {
    _id: 3,
    imageUrl: "/public/img/clementine_150.png",
    description: "This is a description of the image"
  },
  {
    _id: 4,
    imageUrl: "/public/img/clementine_150.png",
    description: "This is a description of the image"
  },
  {
    _id: 5,
    imageUrl: "/public/img/clementine_150.png",
    description: "This is a description of the image"
  },
  {
    _id: 6, 
    imageUrl: "/public/img/clementine_150.png",
    description: "This is a description of the image"
  },
]

var GridItemList = images.map(function(item){
  return <GridItem key={item._id} image={item}/>
})

module.exports = React.createClass({
	render: function() {
		return (
      <div className="container">
        <div className="row">
          <div className="col s12 offset-s1">
            <div className="grid js-masonry" data-masonry-options='{ "itemSelector": ".grid-item" }'>
              {GridItemList}
            </div>
          </div>
        </div>
      </div>
		);
	}
})