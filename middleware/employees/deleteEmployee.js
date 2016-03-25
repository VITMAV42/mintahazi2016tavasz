var requireOption = require('../common').requireOption;

/**
 * Delete the employee object
 */

module.exports = function (objectrepository) {

    var employeeModel = requireOption(objectrepository, 'employeeModel');

    return function (req, res, next) {

        return next();
    };

};
