var dogModel = require('./../models/dogModel');

module.exports = {
  create: function(req, res, next) {
    var dog = new dogModel(req.body);
    dog.save(function(err, result){
      if(err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  read: function(req, res, next) {
    dogModel
    .find(req.query)
    .exec(function (err, result) {
      if(err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  update: function(req, res, next){
    dogModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  delete: function(req, res, next){
    dogModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result){
      if(err) {
        res.send(err);
      }
      res.send(result);
    });
  }
};
