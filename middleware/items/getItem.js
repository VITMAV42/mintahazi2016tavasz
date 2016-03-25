var requireOption = require('../common').requireOption;

/**
 * Get the item for the item param
 *  - if there is no such inventory, redirect to /items
 *  - if there is one, put it on res.tpl.item
 */

module.exports = function (objectrepository) {

    var itemModel = requireOption(objectrepository, 'itemModel');

    return function (req, res, next) {

        return next();
    };

};
