var requireOption = require('../common').requireOption;

/**
 * Create (or update) item if we have the data for it
 * update if we have a res.tpl.item, create if we don't have
 *  - if there is no title, set tpl.error
 *  - if everything is ok redirect to /items/:itemid
 */

module.exports = function (objectrepository) {

    var itemModel = requireOption(objectrepository, 'itemModel');

    return function (req, res, next) {

        return next();
    };

};
