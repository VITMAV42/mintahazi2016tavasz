var requireOption = require('../common').requireOption;

/**
 * Get the item list and put the items on res.tpl.items
 */

module.exports = function (objectrepository) {

    var itemModel = requireOption(objectrepository, 'itemModel');

    return function (req, res, next) {

        return next();
    };

};
