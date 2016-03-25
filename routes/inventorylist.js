var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');

var getInventoryListMW = require('../middleware/inventory/getInventoryList');
var getInventoryMW = require('../middleware/inventory/getInventory');
var getEmployeeListMW = require('../middleware/employees/getEmployeeList');
var getItemList = require('../middleware/items/getItemList');
var updateInventoryMW = require('../middleware/inventory/updateInventory');
var deleteInventoryMW = require('../middleware/inventory/deleteInventory');
var inventoryModel = {};
var itemModel = {};
var employeeModel = {};

module.exports = function (app) {

    var objectRepository = {
        inventoryModel: inventoryModel,
        employeeModel: employeeModel,
        itemModel: itemModel
    };

    /**
     * List all inventory
     */

    app.use('/inventoy',
        authMW(objectRepository),
        getInventoryListMW(objectRepository),
        renderMW(objectRepository, 'inventory')
    );

    /**
     * Create new inventory
     */

    app.use('/inventoy/new',
        authMW(objectRepository),
        updateInventoryMW(objectRepository),
        renderMW(objectRepository, 'newinventory')
    );

    /**
     * Edit the inventory details
     */

    app.use('/inventory/:inventoryid/edit',
        authMW(objectRepository),
        getInventoryMW(objectRepository),
        getEmployeeListMW(objectRepository),
        getItemList(objectRepository),
        updateInventoryMW(objectRepository),
        renderMW(objectRepository, 'newinventory')
    );

    /**
     * Delete inventory
     * - then redirect to /inventory
     */

    app.use('/inventory/:inventoryid/delete',
        authMW(objectRepository),
        getInventoryMW(objectRepository),
        deleteInventoryMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/inventory');
        }
    );

};
