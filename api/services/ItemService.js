module.exports = {
  getItems: function(next) {
    Item.find().populate('availability').exec(function(err, items) {
      if(err) throw err;
      next(items);
    });
  },

  getItem: function(id, next) {
    Item.find({id: id}).exec(function(err, items) {
      if(err) throw err;
      next(items);
    });
  }
};
