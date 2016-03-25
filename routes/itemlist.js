var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');

var getItemListMW = require('../middleware/items/getItemList');
var updateItemMW = require ('../middleware/items/updateItem');
var getItemMW = require ('../middleware/items/getItem');
var getTypeListMW = require ('../middleware/generic/getTypeList');
var deleteItemMW = require ('../middleware/items/deleteItem');
var itemModel = {};

module.exports = function (app) {

    var objectRepository = {
        itemModel: itemModel
    };

    /**
     * List all items
     */

    app.use('/items',
        authMW(objectRepository),
        getItemListMW(objectRepository),
        renderMW(objectRepository, 'items')
    );

    /**
     * Create new item
     */

    app.use('/items/new',
        authMW(objectRepository),
        updateItemMW(objectRepository),
        renderMW(objectRepository, 'newitem')
    );

    /**
     * Edit the item details
     */

    app.use('/inventory/:itemid/edit',
        authMW(objectRepository),
        getItemMW(objectRepository),
        getTypeListMW(objectRepository),
        updateItemMW(objectRepository),
        renderMW(objectRepository, 'newitem')
    );

    /**
     * Delete item
     * - then redirect to /items
     */

    app.use('/inventory/:itemid/delete',
        authMW(objectRepository),
        getItemMW(objectRepository),
        deleteItemMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/items');
        }
    );

};
