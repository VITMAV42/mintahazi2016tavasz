var mainRedirectMW = require('../middleware/generic/mainRedirect');
var inverseAuthMW = require('../middleware/generic/inverseAuth');
var checkUserLoginMW = require('../middleware/generic/checkUserLogin');
var renderMW = require('../middleware/generic/render');
var authMW = require('../middleware/generic/auth');
var logoutMW = require('../middleware/generic/logout');
var userModel = {};

module.exports = function (app) {

    var objectRepository = {
        userModel: userModel
    };

    /**
     * Main page
     */
    app.get('/',
        mainRedirectMW(objectRepository)
    );

    /**
     * Login page
     */
    app.use('/login',
        inverseAuthMW(objectRepository),
        checkUserLoginMW(objectRepository),
        renderMW(objectRepository, 'login')
    );

    /**
     * Main page
     */
    app.get('/logout',
        logoutMW(objectRepository),
        function(req, res, next) {
            res.redirect('/');
        }
    );

};
