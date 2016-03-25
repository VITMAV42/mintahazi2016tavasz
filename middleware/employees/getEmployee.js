var requireOption = require('../common').requireOption;

/**
 * Get the employee for the employeeid param
 *  - if there is no such employee, redirect to /employees
 *  - if there is one, put it on res.tpl.employee
 */

module.exports = function (objectrepository) {

    var employeeModel = requireOption(objectrepository, 'employeeModel');

    return function (req, res, next) {

        return next();
    };

};
