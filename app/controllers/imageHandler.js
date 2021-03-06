'use strict';

var Users = require('../models/users.js');
var Image = require('../models/images.js');

function ImageHandler () {

    this.getImages = function (req, res) {
        Image
            .find({})
            .sort({_id: 'desc'})
            .lean()
            .exec(function (err, result) {
                if (err) { throw err; }

                  result.forEach(function(item){
                    if (req.user && item.userId){
                      item.userId.toString() === req.user._id.toString() ? item.allowDelete = true : null
                    }
                  })

                res.json(result);
            });
    };

    this.getUserImages = function (req, res) {
      Image
        .find({userId: req.params.id})
        .sort({_id: 'desc'})
        .lean()
        .exec(function(err, result) {
          if (err) {throw err;}
            result.forEach(function(item){
              if (req.user && item.userId){
                item.userId.toString() === req.user._id.toString() ? item.allowDelete = true : null
              }
            })
          res.json(result);
        })
    }

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
            res.json(newImage);
        });
    };

    this.deleteImage = function (req, res) {
        console.log(req.params.id)
        Image
            .findByIdAndRemove(req.params.id)
            .exec(function (err, result) {
                    if (err) { throw err; }
                    res.send('deleted');
                }
            );
    };

};

module.exports = ImageHandler;
