'use strict';

var path = process.cwd();

var ImageHandler = require(path + '/app/controllers/imageHandler.js');

module.exports = function (app, passport) {
    function isLoggedIn (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.send('not authorized')
        }
    }
    var imageHandler = new ImageHandler();

    app.route('/')
        .get(function (req, res) {
            res.sendFile(path + '/public/index.html');
        });

    app.route('/logout')
        .get(function (req, res) {
            req.logout();
            res.redirect('/');
        });

    app.route('/api/user')
        .get(function (req, res) {
            if (req.user) {
                res.json(req.user);
            } else {
                res.status(204);
                res.send();
            }
        });

    app.route('/auth/twitter/callback')
        .get(passport.authenticate('twitter', {
          successRedirect: '/',
          failureRedirect: '/login'
        }));

    app.route('/api/images')
        .get(imageHandler.getImages)
        .post(isLoggedIn, imageHandler.addImage)

    app.route('/api/images/user')
        .get(isLoggedIn, imageHandler.getUserImages)

    app.route('/api/images/delete/:id')
        .delete(isLoggedIn, imageHandler.deleteImage);
};
