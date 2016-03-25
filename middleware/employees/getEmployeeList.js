var requireOption = require('../common').requireOption;

/**
 * Get the employee list and put the inventories on res.tpl.employees
 */

module.exports = function (objectrepository) {

    var employeeModel = requireOption(objectrepository, 'employeeModel');

    return function (req, res, next) {

        return next();
    };

};
