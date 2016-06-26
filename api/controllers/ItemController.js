/**
 * ItemController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getItems: function(req, res) {
    ItemService.getItems(function(items) {
      return res.json(200, {success: true, data: items});
    });
  },

  getItem: function(req, res) {
    var itemId = (req.param('itemId'));
    ItemService.getItem(itemId, function(item) {
      return res.json(200, {success: true, data: item});
    });
  },
};

