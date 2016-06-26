module.exports = {
  getChps: function (next) {
    Chp.find().exec(function (err, chps) {
      if (err) throw err;
      next(chps);
    });
  }
};
