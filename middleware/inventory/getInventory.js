var requireOption = require('../common').requireOption;

/**
 * Get the inventory for the inventoryid param
 *  - if there is no such inventory, redirect to /inventory
 *  - if there is one, put it on res.tpl.inventory
 */

module.exports = function (objectrepository) {

    var inventoryModel = requireOption(objectrepository, 'inventoryModel');

    return function (req, res, next) {

        return next();
    };

};
