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

  this.getTwitterUser = function(displayName) {
    client.get('users/show', {screen_name: displayName}, function(err, user) {
      if (err) {
        console.log(err)
      } else {
        console.log(user.profile_image_url.replace(/_normal.jpg/g, '.jpg'));
      }
    })
  }

};

module.exports = UserHandler;
