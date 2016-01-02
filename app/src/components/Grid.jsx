var React = require('react');
var GridItem = require('./GridItem');
var Masonry = require('react-masonry-component')(React);
var AddButton = require('./AddButton');
var ModalAdd = require('./ModalAdd');
var Ajax = require('simple-ajax');

module.exports = React.createClass({
		getInitialState: function(){
        return {
            images: undefined,
						users: undefined
        }
    },
    componentDidMount: function() {
			  var apiUrl;
				switch (this.props.type){
					case 'user':
						apiUrl = '/api/images/user/' + this.props.userId;
						break;
					case 'users':
						apiUrl = '/api/users';
						break;
					default:
						apiUrl = '/api/images';;
				}
				var ajax = new Ajax({
					url: apiUrl,
					method: 'GET'
				})
					.on('success', function(e){
						if(this.props.type === 'users'){
							this.setState({
								users: JSON.parse(e.currentTarget.response)
							})
						} else {
							console.log(e)
							this.setState({
	              images: JSON.parse(e.currentTarget.response)
	            })
						}
					}.bind(this))
				ajax.send();
    },
    updateComponent: function(newImage) {
        var img = JSON.parse(newImage)
				img.allowDelete = true;
				var newImages = this.state.images.slice();
				newImages.unshift(img)
        this.setState({
            images: newImages
        })
    },
    render: function() {
			return (
				<div className="container">
					<div className="row">
						<div className="col s12 offset-s1">
							<Masonry className={'grid'}>
								{this.props.type === 'users'
									?
									this.state.users ? this.state.users.map(function(item, i){
										return <GridItem
															key={item._id}
															image={item.twitter.img}
															userId={item._id}
															title={item.twitter.displayName}
															link={'/user/' + item._id}
															type={this.props.type}
															handleDelete={this.handleDelete.bind(this, item._id, i)}
														/>
									}.bind(this)) :
									<div>Loading</div>

									:
									this.state.images ? this.state.images.map(function(item, i){
										return <GridItem
															key={item._id}
															image={item.imageUrl}
															title={item.title}
															type={this.props.type}
															allowDelete={item.allowDelete}
															handleDelete={this.handleDelete.bind(this, item._id, i)}
														/>
									}.bind(this)) :
									<div>Loading</div>

								}
						</Masonry>
					</div>
					{console.log(this.props.user)}
					{this.props.user && this.props.type === 'user' && this.props.user._id.toString() === this.props.userId.toString() ?
						<AddButton /> : null}
					{this.props.user && this.props.type !== 'users' && this.props.type !== 'user' ? <AddButton /> : null	}
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
