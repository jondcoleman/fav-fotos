var React = require('react');
var GridItem = require('./GridItem');
var Masonry = require('react-masonry-component')(React);
var ModalAdd = require('./ModalAdd');
var Ajax = require('simple-ajax');

module.exports = React.createClass({
		getInitialState: function(){
        return {
            images: undefined
        }
    },
    componentDidMount: function() {
				//TODO: abstract this so that I can get users too depending on Grid type
			  var apiUrl;
				this.props.type === 'user' ? apiUrl = '/api/images/user' : apiUrl = '/api/images';
				var ajax = new Ajax({
					url: apiUrl,
					method: 'GET'
				})
					.on('success', function(e){
						this.setState({
                images: JSON.parse(e.currentTarget.response)
            })
					}.bind(this))
				ajax.send();
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
								{this.state.images ? this.state.images.map(function(item, i){
									return <GridItem key={item._id} image={item} type={this.props.type} handleDelete={this.handleDelete.bind(this, item._id, i)}/>
								}.bind(this)) :
								<div>Loading</div>
							}
						</Masonry>
					</div>
				</div>
				<ModalAdd handleUpdate={this.updateComponent.bind(this)}/>
			</div>
		);
	},
	handleDelete: function(key, i) {
		var ajax = new Ajax({
			url: '/api/images/delete/' + key,
			method: 'DELETE'
		})
			.on('success', function(e){
				this.setState({
					images: this.state.images.filter(function(item, index){return index !== i})
				})
			}.bind(this))
		ajax.send()
	}
})
