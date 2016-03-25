var requireOption = require('../common').requireOption;

/**
 * Delete the item object
 */

module.exports = function (objectrepository) {

    var itemModel = requireOption(objectrepository, 'itemModel');

    return function (req, res, next) {

        return next();
    };

};
