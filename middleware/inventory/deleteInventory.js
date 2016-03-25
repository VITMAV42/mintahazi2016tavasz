var requireOption = require('../common').requireOption;

/**
 * Delete the inventory object
 */

module.exports = function (objectrepository) {

    var inventoryModel = requireOption(objectrepository, 'inventoryModel');

    return function (req, res, next) {

        return next();
    };

};
