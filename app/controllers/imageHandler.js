'use strict';

var Users = require('../models/users.js');
var Image = require('../models/images.js');

function ImageHandler () {

    this.getImages = function (req, res) {
        Users
            .find({})
            .exec(function (err, result) {
                if (err) { throw err; }

                res.json(result);
            });
    };

    this.addImage = function (req, res) {
        var newImage = new Image();
        newImage.imageUrl = req.body.imageUrl;
        newImage.userId = req.user._id;
        newImage.description = req.body.description;
        newImage.title = req.body.title;
        newImage.save(function (err) {
            if (err) {
                throw err;
            }
            
            return newImage;
        });
    };

    this.deleteImage = function (req, res) {
        Users
            .findByIdAndRemove(req.body._id)
            .exec(function (err, result) {
                    if (err) { throw err; }

                    res.send('deleted');
                }
            );
    };

};

module.exports = ImageHandler;