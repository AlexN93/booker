module.exports = {
  addOrder: function(order, next) {
    Order.create(order).exec(function(err, order) {
      if(err) throw err;
      next(order);
    });
  }
};
