var requireOption = require('../common').requireOption;

/**
 * Get the inventory list and put the inventories on res.tpl.inventories
 */

module.exports = function (objectrepository) {

    var inventoryModel = requireOption(objectrepository, 'inventoryModel');

    return function (req, res, next) {

        return next();
    };
};
