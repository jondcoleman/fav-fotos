var React = require('react');
var Ajax = require('simple-ajax');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            image_url: '',
            image_title: '',
            image_description: ''
        };
    },
    handleUrlChange: function(e) {
        this.setState({image_url: e.target.value});
    },
    handleTitleChange: function(e) {
        this.setState({image_title: e.target.value});
    },
    handleDescriptionChange: function(e){
        this.setState({image_description: e.target.value})
    },
    handleSubmit: function(e){
        e.preventDefault();
        var iUrl = this.state.image_url.trim();
        var iTitle = this.state.image_title.trim();
        if (!iUrl || !iTitle) {
            return;
        }
        $('#modal1').closeModal();
        this.setState({
            image_url: '',
            image_title: '',
        })

        var ajax = new Ajax({
            url: '/api/images',
            method: 'POST',
            dataType: 'json',
            data: {
                imageUrl: iUrl,
                title: iTitle,
            }
        })
            .on('success', function(e){
                this.props.handleUpdate(e.target.response);
            }.bind(this))
            .on('error', function(e){
            })
        ajax.send();
    },
    render: function() {
        return (
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Add an Image</h4>

                    <div className="row">
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <div className="row modal-form-row">
                                <div className="input-field col s12">
                                    <input id="image_url" type="text" className="validate" required value={this.state.image_url} onChange={this.handleUrlChange}></input>
                                    <label for="image_url">Image URL</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="image_title" type="text" className="validate" required value={this.state.image_title} onChange={this.handleTitleChange}></input>
                                    <label for="image_title">Title</label>
                                </div>
                            </div>
                            <input type="submit" value="Submit" className="waves-effect waves-green btn-flat"></input>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">

                </div>
            </div>
		)
	}
});
