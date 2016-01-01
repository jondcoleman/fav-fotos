'use strict';
module.exports = {
    'twitterAuth': {
        'clientID': process.env.TWITTER_KEY,
        'clientSecret': process.env.TWITTER_SECRET,
        'accessTokenKey': process.env.TWITTER_ACCESS_TOKEN_KEY,
        'accessTokenSecret': process.env.TWITTER_ACCESS_TOKEN_SECRET,
        'callbackURL': process.env.APP_URL + 'auth/twitter/callback/'
    }
};
