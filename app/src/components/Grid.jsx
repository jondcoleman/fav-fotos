var React = require('react');
var GridItem = require('./GridItem');
var Masonry = require('react-masonry-component')(React);
var ModalAdd = require('./ModalAdd');
var ajax = require('../ajax-functions');

module.exports = React.createClass({
	getInitialState: function(){
        return {
            images: undefined
        }
    },
    componentDidMount: function() {
        ajax('GET', '/api/images', function(result){
            this.setState({
                images: JSON.parse(result)
            })
        }.bind(this))
    },
    updateComponent: function(newImage) {
        var img = JSON.parse(newImage)
        this.setState({
            images: this.state.images.concat(img)
        })
    },
    render: function() {
			return (
				<div className="container">
					<div className="row">
						<div className="col s12 offset-s1">
							<Masonry className={'grid'}>
								{this.state.images ? this.state.images.map(function(item){
									return <GridItem key={item._id} image={item}/>
								}) :
								<div>Loading</div>
							}
						</Masonry>
					</div>
				</div>
				<ModalAdd handleUpdate={this.updateComponent.bind(this)}/>
			</div>
		);
	}
})
