'use strict';

var Users = require('../models/users.js');
var Image = require('../models/images.js');
var Twitter = require('twitter');



function UserHandler() {
  var configAuth = require('../config/auth.js');
  var client = new Twitter({
    consumer_key: configAuth.twitterAuth.clientID,
    consumer_secret: configAuth.twitterAuth.clientSecret,
    access_token_key: configAuth.twitterAuth.accessTokenKey,
    access_token_secret: configAuth.twitterAuth.accessTokenSecret,
  });

  var getTwitterUser = function(username, callback) {
    client.get('users/show', {
      screen_name: username
    }, function(err, user) {
      if (err) {
        console.log(err)
        callback(undefined);
      } else {
        callback(user.profile_image_url
          .replace(/_normal.jpg/g, '.jpg')
          .replace(/_normal.jpeg/g, '.jpeg')
          .replace(/_normal.png/g, '.png'));
      }
    })
  }

  this.getUsers = function(req, res) {
    Users
      .find({})
      .sort({
        _id: 'desc'
      })
      .lean() //this returns a mutable javascript object
      .exec(function(err, users) {
        if (err) {
          throw err;
        }
        var counter = 0;
        users.forEach(function(user, index){
          getTwitterUser(user.twitter.username, function(result){
            user.twitter.img = result;
            counter++
            users.length === counter ? res.json(users) : null;
          });
        })
      });
  };

};

module.exports = UserHandler;
