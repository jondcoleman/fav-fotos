'use strict';

var path = process.cwd();

var ImageHandler = require(path + '/app/controllers/imageHandler.js');

module.exports = function (app, passport) {
    
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
    
    app.route('/api/user/:id')
        .get(function (req, res) {
            if (req.user) {
                res.json(req.user.github);
            } else {
                res.send('no user');
            }
        });
        
    app.route('/auth/github/callback')
        .get(passport.authenticate('github', {
        successRedirect: '/',
        failureRedirect: '/login'
        }));
    
    app.route('/api/images')
        .get(imageHandler.getImages)
        .post(imageHandler.addImage)
        
    app.route('/api/images/:id')
        .delete(imageHandler.deleteImage);
};