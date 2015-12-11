'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Image = new Schema({
	imageUrl: String,
	title: String,
	description: String,
	//userId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Image', Image);