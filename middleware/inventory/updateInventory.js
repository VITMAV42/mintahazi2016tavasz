var requireOption = require('../common').requireOption;

/**
 * Create (or update) inventory if we have the data for it
 * update if we have a res.tpl.inventories, create if we don't have
 *  - if there is no title, set tpl.error
 *  - if everything is ok redirect to /inventory/:inventoryid
 */

module.exports = function (objectrepository) {

    var inventoryModel = requireOption(objectrepository, 'inventoryModel');

    return function (req, res, next) {

        return next();
    };

};
