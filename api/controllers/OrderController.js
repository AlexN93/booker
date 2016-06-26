/**
 * OrderController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  addOrder: function(req, res) {
    OrderService.addOrder(req.params.all(), function(success) {
      res.json(success);
    });
  },
};

