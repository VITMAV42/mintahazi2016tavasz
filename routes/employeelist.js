var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');

var getEmployeeListMW = require('../middleware/employees/getEmployeeList');
var updateEmployeeMW = require('../middleware/employees/updateEmployee');
var getEmployeeMW = require('../middleware/employees/getEmployee');
var deleteEmployeeMW = require('../middleware/employees/getEmployee');
var employeeModel = {};

module.exports = function (app) {

    var objectRepository = {
        employeeModel: employeeModel
    };

    /**
     * Add new employee
     */

    app.use('/employees/new',
        authMW(objectRepository),
        updateEmployeeMW(objectRepository),
        renderMW(objectRepository, 'employee_edit')
    );

    /**
     * Edit the employee details
     */

    app.use('/employees/:employeeid/edit',
        authMW(objectRepository),
        getEmployeeMW(objectRepository),
        updateEmployeeMW(objectRepository),
        renderMW(objectRepository, 'employee_edit')
    );

    /**
     * Delete employee
     * - then redirect to /employees
     */

    app.use('/employees/:employeeid/delete',
        authMW(objectRepository),
        getEmployeeMW(objectRepository),
        deleteEmployeeMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/employees');
        }
    );

    /**
     * List all employee
     */

    app.use('/employees',
      authMW(objectRepository),
      getEmployeeListMW(objectRepository),
      renderMW(objectRepository, 'employees')
    );

};

